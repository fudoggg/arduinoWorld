const mongoose = require('mongoose')

const Cart = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, required: true, ref: 'user'},
    items: [{
        count: {type: Number, required: true, default: 1},
        productId: {type: mongoose.Types.ObjectId, ref: 'product', required: true}
    }],
})

module.exports = mongoose.model('cart', Cart)