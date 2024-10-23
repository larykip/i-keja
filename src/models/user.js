import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    houses: [{
        type: Schema.Types.ObjectId,
        ref: 'House'
    }]
}, { timestamps: true })

const User = model('User', userSchema)

export default User