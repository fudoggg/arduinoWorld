const mongoose = require('mongoose')

const Order = new mongoose.Schema({
    status: {type: String, required: true},
    isDeliver: {type: Boolean, required: true},
    sum: {type: Number, required: true},
    items: [{
        count: {type: Number, required: true, defult: 1},
        productId: {type: mongoose.Types.ObjectId, ref: 'product', required: true}
    }],
    user: {
        userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
        phone: {type: String, required: true},
        email: {type: String, required: false},
        fullName: {type: String, required: false},
        addres: {type: String, required: false}
    },
    createdAt: {type: Date},
    updatedAt: {type: Date},
    number: {type: Number}
})

module.exports = mongoose.model('order', Order)