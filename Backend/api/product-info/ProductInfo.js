const mongoose = require('mongoose')

const ProductInfo = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    title: {type: String, required: true},
    value: {type: String, required: true},
    createdAt: {type: Date},
    updatedAt: {type: Date},
})

module.exports = mongoose.model('productInfo', ProductInfo)