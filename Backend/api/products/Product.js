const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    description: {type: String, required: false},
    name: {type: String, required: true},
    createdAt: {type: Date},
    updatedAt: {type: Date},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'categorie'},
    productInfo: [{type: mongoose.Schema.Types.ObjectId, ref: 'productInfo'}],
    feedback: [{type: mongoose.Schema.Types.ObjectId, ref: 'feedback'}],
    rating: {type: Number, default: 0},
    img: [{type: String, required: false}]
})

module.exports = mongoose.model('product', Product)