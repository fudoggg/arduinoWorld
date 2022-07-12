const mongoose = require('mongoose')

const User = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: false},
    password: {type: String, required: true},
    name: {type: String, required: true},
    status: {type: String},
    addres: {type: String},
    role: {type: mongoose.Schema.Types.ObjectId, ref: 'user_role'},
    feedback: [{type: mongoose.Schema.Types.ObjectId, ref: 'feedback'}],
    favorite: {type: mongoose.Schema.Types.ObjectId, ref: 'favorite'},
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'cart'},
    createdAt: {type: Date},
    updatedAt: {type: Date},
    activationLink: {type: String}
})

module.exports = mongoose.model('user', User)