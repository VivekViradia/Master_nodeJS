const express = require('express')
const { connectMongoDB } = require('./connection')
const { LogReqRes } = require('./middlewares')
const userRouter = require('./routes/user')
const urlRouter = require('./routes/url')
const URL = require('./models/url')

const app = express();
const PORT = 8181;

// connection
connectMongoDB('mongodb://127.0.0.1:27017/url-app-1').then(() => {
    console.log('MongoDB Connected')
})
// connectMongoDB('mongodb://127.0.0.1:27017/youtube-app-1').then(() => {
//     console.log('MongoDB Connected')
// })

// middleware
app.use(express.urlencoded({ extended: false }))

app.use(LogReqRes('log.txt'))

// app.use('/api/users', userRouter)
app.use('/url', urlRouter)
// app.get('/url/api/:shortid', async (req, res) => {
//     const shortID = req.params.shortid
//     console.log('SHORID : ',shortID)
//     const entry = await URL.findOneAndUpdate({
//         shortID
//     },
//     {
//         $push: {
//             visitHistory: {
//                 timestamp: Date.now()
//             }
//         }
//     }).then(()=>console.log('SUCCCESS---------------')).catch(err=>console.log('ERROIR : ',err))
//     console.log('ENTRY : ', entry)
//     // const url=entry.redirectURL.startsWith('http://') || entry.redirectURL.startsWith('https://') ? entry.redirectURL :`https://${entry.redirectURL}` ;
//     // return res.redirect(url)
//     return res.redirect(entry.redirectURL);
// })
// app.get('/url/api/:shortid', async (req, res) => {
//     const shortID = req.params.shortid;
//     console.log('SHORTID : ', shortID);

//     try {
//         const entry = await URL.findOneAndUpdate(
//             { shortID },
//             {
//                 $push: {
//                     visitHistory: {
//                         timestamp: Date.now()
//                     }
//                 }
//             },
//             { new: true } // Return the updated document
//         );

//         if (!entry) {
//             console.log(`No entry found for SHORTID: ${shortID}`);
//             return res.status(404).send('URL not found');
//         }

//         console.log('ENTRY : ', entry);

//         const url = entry.redirectUrl.startsWith('http://') || entry.redirectUrl.startsWith('https://') ? entry.redirectUrl : `https://${entry.redirectUrl}`;
//         return res.redirect(url);
//     } catch (err) {
//         console.log('ERROR : ', err);
//         return res.status(500).send('Internal Server Error');
//     }
// });

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`))