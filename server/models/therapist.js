const mongoose = require('mongoose');

const therapistSchema = mongoose.Schema({
        first: { 
            type: String,
            required: true
        },
        middle : String,

        last: { 
            type: String,
            required:true
        },
        specialty: String,
        time: Number,
        location: String,
        takeInsurance: Boolean,
        privatePay: Boolean,
});


const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;