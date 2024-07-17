const { redirect } = require('express/lib/response')
const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortUrlId: {
        type: String,
        require: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        require: true,
    },
    visitHistory: [{ timestamp: { type: String } }]
}, { timestamps: true })

const URL = mongoose.model('url', urlSchema)

module.exports = URL;