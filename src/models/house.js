const { Schema, model } = require("mongoose");


const houseSchema = new Schema({
    houseNo: {
        type: String,
        required: true
    },
    housetype: {
        type: String,
        enum: ['Studio', '1BR'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    utilities: [{
        type: Schema.Types.ObjectId,
        ref: 'Utility'
    }],
    tenant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
        required: true
    }
}, { timestamps: true })

const House = model('House', houseSchema)

export default House