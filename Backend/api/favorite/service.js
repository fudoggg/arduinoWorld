const Favorite = require('./Favorite')
const mongoose = require('mongoose')

module.exports = {
    async addTo({userId, productId}){
        if(!userId || !productId) throw new Error ("ID не указаны")
        const favorite = await Favorite.findOne({userId: userId})
        favorite.productsIds.push(productId)
        const updatedFavorite = await Favorite.findByIdAndUpdate(favorite._id, {productsIds: favorite.productsIds}, {new: true}) 
        return updatedFavorite
    },

    async get({id}){
        if(!id){
            const favorite = await Favorite.find()
            return favorite
        }
        const favorite = await Favorite.findById(id)
        return [favorite]
    },

    async getByUserID({userId}){
        if(!userId) throw new Error ("UserId не указан")

        const favorite = await Favorite.aggregate([
            {$match: {userId: mongoose.Types.ObjectId(userId)}},
            
            {
                $lookup: {
                    from: "products",
                    localField: "productsIds",
                    foreignField: "_id",
                    as: "productsIds"
                }
            },
        ]).sort({userId: 1})

        console.log(favorite)
        return favorite
    },

    async update({id}, options){
        if(!id) throw new Error ("ID не указан")
        const {userId} = options
        if(userId) throw new Error ("Нельзя изменить пользователя в избранном пользователя!")
        const favorite = await Favorite.findByIdAndUpdate(id, options, {new: true})
        return favorite
    },
    
    async deleteFrom({userId, productId}){
        if(!userId || !productId) throw new Error ("ID не указаны")
        const favorite = await Favorite.findOne({userId: userId})
        const productArr = []
        favorite.productsIds.forEach(element => {
            if(element != productId) productArr.push(element)
        })
        const updatedFavorite = await Favorite.findByIdAndUpdate(favorite._id, {productsIds: productArr}, {new: true}) 
        return updatedFavorite
    },

    async clear({userId}){
        if(!userId) throw new Error ("UserId не указан")            
        const favorite = await Favorite.findOneAndUpdate({userId: userId}, {productsIds: []}, {new: true})
        return favorite
    },
}