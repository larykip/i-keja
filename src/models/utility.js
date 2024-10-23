const { Schema, model } = require("mongoose");


const utilitySchema = new Schema({
    type: {
        type: String,
        enum: ['Water', 'Electricity', 'Garbage'],
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    billingCycle: {
        type: String,
        enum: ['Monthly', 'Quarterly', 'Yearly'],
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    house: {
        type: Schema.Types.ObjectId,
        ref: 'House',
        required: true
    }
}, { timestamps: true })

const Utility = model('Utility', utilitySchema)

export default Utility