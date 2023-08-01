const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
    wallet: Number,
    cvv: Number
})


module.exports = mongoose.model("User", userSchema)