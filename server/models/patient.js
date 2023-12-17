import { Schema, model } from "mongoose";
const patientShema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String

    },
    gender: {
        type: String,
        enum: ['female', 'male', 'other']
    },
    status: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

const Patient = model('Patient', patientShema)
export default Patient 