const db = require('../config/connection');
const { Profile, Therapist } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const therapistSeeds = require('./therapist-seeds.json')

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Therapist.deleteMany({})
    await Therapist.create(therapistSeeds)
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

module.exports = seedHandler