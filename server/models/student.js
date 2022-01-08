import mongoose from 'mongoose';

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
        speciality: String,
        time: Number,
        location: String,
        takeInsurance: Boolean,
        privatePay: Boolean,
});


const student = mongoose.model('therapist', therapistSchema);

export default student;