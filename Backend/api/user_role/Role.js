const mongoose = require('mongoose')

const Role = new mongoose.Schema({
    role: {type: String, required: true, unique: true},
})

module.exports = mongoose.model('user_role', Role)