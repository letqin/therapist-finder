const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Therapist {
    _id: ID
    first: String!
    middle: String
    last: String!
    speciality: String
    time: Int
    location: String
    takeInsurance: Boolean
    privatePay: Boolean
  }



  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    therapists: [Therapist]!
    therapist(therapistId: ID!): Therapist
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
   
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addTherapist(first: String!, middle: String, last: String!, speciality: String, time: Int, location: String, takeInsurance: Boolean, privatePay: Boolean): Therapist
    
    deleteTherapist(_id: String!): Therapist

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
