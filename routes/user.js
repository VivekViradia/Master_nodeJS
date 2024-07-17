const express = require('express')
const router = express.Router()
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user')

router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

router.route('/:usid')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;

// router.get('/', handleGetAllUsers)
// router.post('/',handleGetAllUsers)

// app.get('/api/users/:usid', (req, res) => {
//     const userID = Number(req.params.usid);
//     const user = userData.find((user) => user.id === userID)
//     console.log('USER : ',user)
//     return res.json(user)
// })

// app.post('/api/user', (req, res) => {
//    return res.json({status:'pending'})
// })

// app.patch('/api/user/:usid', (req, res) => {
//    return res.json({status:'pending'})
// })

// app.post('/api/user/:usid', (req, res) => {
//    return res.json({status:'pending'})
// })