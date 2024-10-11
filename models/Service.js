import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    serviceType: {
        type: String,
        enum: ['E-Doctors', 'Doctor at Home', 'Second Opinion', 'E-Psychologist', 'E-Physiotherapist', 'E-Patient Care'],
        required: true
    },
    number: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
