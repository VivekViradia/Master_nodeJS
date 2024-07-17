
const mongoose = require("mongoose")

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        require: true

    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('user',userSchema)

module.exports = User;