const { AuthenticationError } = require('apollo-server-express');
const { Profile, Therapist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    therapists: async () => {
      return Therapist.find();
    },

    therapist: async (parent, {therapistId}) => {
      return Therapist.findOne({_id: therapistId});
    },
    therapistFirst: async (parent, {firstName}) => {
      return Therapist.findOne({first: firstName})
    },
    therapistLast: async (parent, {lastName}) => {
      return Therapist.findOne({last: lastName})
    },
    therapistSpecialty: async (parent, {speciality}) => {
      return Therapist.findOne({speciality: speciality})
    },
    therapistLoc: async (parent, {location}) => {
      return Therapist.findOne({location: location})
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    
    addTherapist: async (parent, {first, middle, last, speciality, time, location, takeInsurance, privatePay})=>{
      const therapist = await Therapist.create({first, middle, last, speciality, time, location, takeInsurance, privatePay})

      return therapist
    },

    updateTherapist: async (parent, {id, first, middle, last, specialty, time, location, takeInsurance, privatePay}) => {
      //calls a therapist that we can update
      const therapist = await Therapist.find({'_id' : id})
      //gives each part of the schema the value given
      therapist.first = first
      therapist.middle = middle
      therapist.last = last
      therapist.specialty = specialty
      therapist.time = time
      therapist.location = location
      therapist.takeInsurance = takeInsurance
      therapist.privatePay = privatePay
      //saves all the values we just set
      await therapist.save
      //returns our updated therapist object
      return therapist
    },

    deleteTherapist: async (parent, {id}) =>{
      const therapist = await Therapist.deleteOne({
        where: {_id: id}
      })
      return therapist
      },
    // Add a third argument to the resolver to access data in our `context`
    addSkill: async (parent, { profileId, skill }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { skills: skill },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeSkill: async (parent, { skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
