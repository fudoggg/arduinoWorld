const mongoose = require('mongoose')

const Categories = new mongoose.Schema({
    name: {type: String, required: true},
    parentId: {type: mongoose.Schema.Types.ObjectId, ref: 'categorie'},
    isParent: {type: Boolean, required: true}
})

module.exports = mongoose.model('categorie', Categories)