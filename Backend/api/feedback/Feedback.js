const mongoose = require('mongoose')
//const Image = require('../../uploads/image')

const Feedback = new mongoose.Schema({
    rate: {type: Number, required: true},
    comment: {type: String, required: false},
    //photo: {type: Image, required: false},
    productId: {type: mongoose.Types.ObjectId, ref: 'product'},
    userId: {type: mongoose.Types.ObjectId, ref: 'user'},
    createdAt: {type: Date},
    updatedAt: {type: Date},
})

module.exports = mongoose.model('feedback', Feedback)