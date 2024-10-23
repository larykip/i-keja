const { Schema, model } = require("mongoose");


const apartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    houses: [{
        type: Schema.Types.ObjectId,
        ref: 'House'
    }]
}, { timestamps: true })

const Apartment = model('Apartment', apartmentSchema)

export default Apartment