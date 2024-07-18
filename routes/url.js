const express = require('express')
const { handleGenerateNewShortUrl,handleGetAllUrl, handleRedirectUrl } = require('../controllers/url')
const router = express.Router();

router.post('/', handleGenerateNewShortUrl)
router.get('/all', handleGetAllUrl)
router.get('/:shortid',handleRedirectUrl)

module.exports = router