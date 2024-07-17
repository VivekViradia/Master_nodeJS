const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    res.setHeader('myName', 'viradiaVivek')
    const allDbusers = await User.find({})
    return res.json(allDbusers)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.usid)
    // const user = allUser.find((user) => user.id === user)
    // console.log('USER : ', user)
    if (!user) return res.status(404).json({ message: "User not found" })
    return res.json(user)
}
async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.usid, { lastName: "Changed" })
    return res.json({ status: 'sccuess' })
}
async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.usid)
    return res.json({ status: 'sccuess' })
}

async function handleCreateNewUser(req, res) {
    const data = req.body
    if (!data || !data.first_name || !data.last_name || !data.job_title || !data.gender || !data.email) {
        return res.status(400).json({ message: 'All fields are required.' })
    }

    const result = await User.create({
        firstName: data.first_name,
        lastName: data.last_name,
        jobTitle: data.job_title,
        gender: data.gender,
        email: data.email,
    })
    return res.status(201).json({ message: "Success" })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}