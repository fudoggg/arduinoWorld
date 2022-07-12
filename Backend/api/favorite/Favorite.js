const mongoose = require('mongoose')

const Favorite = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref: 'user'},
    productsIds: [{type: mongoose.Types.ObjectId, ref: 'product'}],
})

module.exports = mongoose.model('favorite', Favorite)