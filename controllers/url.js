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

async function handleGetAllUrl(req, res) {
    const allUrls = await URL.find({})
    return res.status(200).send(allUrls)
}

async function handleRedirectUrl(req, res) {
    const shortID = req.params.shortid;
    console.log('SHORTID : ', shortID);

    try {
        const entry = await URL.findOneAndUpdate(
            { shortID },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            },
            { new: true } // Return the updated document
        );

        // if (!entry) {
        //     console.log(`No entry found for SHORTID: ${shortID}`);
        //     return res.status(404).send('URL not found');
        // }

        console.log('ENTRY : ', entry);

        // const url = entry.redirectUrl.startsWith('http://') || entry.redirectUrl.startsWith('https://') ? entry.redirectUrl : `https://${entry.redirectUrl}`;
        console.log('URLLLL : ',entry?.redirectUrl)
        // return res.redirect(url);
        return res.redirect(entry?.redirectUrl)
    } catch (err) {
        console.log('ERROR : ', err);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAllUrl,
    handleRedirectUrl
}