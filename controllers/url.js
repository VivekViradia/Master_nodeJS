const URL = require('../models/url')
const shortid = require('shortid')
async function handleGenerateNewShortUrl(req, res) {
    if (!req.body) return res.status(400).json({Error:'Url is required'})
    const shortID = shortid();
    await URL.create({
        shortUrlId: shortID,
        redirectUrl: req.body.url,
        visitHistory:[]
    })
    return res.json({Message:'Success', ID : shortID})
}

module.exports = {
    handleGenerateNewShortUrl
}