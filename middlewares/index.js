const fs = require('fs')

function LogReqRes(filename) {
    return (req, res, next) => {
        console.log('Hello Middleware 1')
        // return res.json({message:'Hello From Middleware 1'})
        // req.MyUserName = 'vivekViradia123'
        fs.appendFile(filename, `\n${Date.now()} : ${req.method} : ${req.path}\n`, (err, data) => {
            next()
        })
    }
}

module.exports = {LogReqRes};