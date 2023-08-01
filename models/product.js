const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    vendor: String,
    model: String,
    color: String,
    price: Number
})


module.exports = mongoose.model("Product", productSchema)