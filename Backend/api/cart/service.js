const Cart = require('./Cart')
const mongoose = require('mongoose')

module.exports = {
    async addTo({userId, productId, count}){
        if(!userId || !productId || !count) throw new Error ("ID не указаны")
        const cart = await Cart.findOne({userId: userId})
        const items = {
            productId: productId,
            count: count
        }

        const isRepeat = cart.items.find(element => element.productId == productId)

        if(isRepeat === undefined) cart.items.push(items)

        const updatedCart = await Cart.findByIdAndUpdate(cart._id, {items: cart.items}, {new: true}) 
        return updatedCart
    },

    async get({id}){
        if(!id){
            const cart = await Cart.find()
            return cart
        }
        const cart = await Cart.findById(id)
        return [cart]
    },

    async getByUserID({userId}){
        if(!userId) throw new Error ("UserId не указан")
        
        const [cart] = await Cart.aggregate([
            {$match: {userId: mongoose.Types.ObjectId(userId)}},
            {$unwind: {path: "$items", preserveNullAndEmptyArrays: true}},
            {
                $lookup: {
                    from: "products",
                    localField: "items.productId",
                    foreignField: "_id",
                    as: "items.productId"
                }
            },
            {$unwind: {path: "$items.productId", preserveNullAndEmptyArrays: true}},
            {
                $group:{
                    _id: "$_id",
                    userId: {$first: "$userId"},
                    sumOf: {$sum: "$items.count"},
                    totalPrice: {$sum: {$multiply: ["$items.count", "$items.productId.price"]}},
                    items: {
                        $push: {
                            count: "$items.count",
                            productId: "$items.productId"
                        }
                    }
                }
            }
        ])

        //console.log(cart.items) 

        if(cart.items[0].productId == null) cart.items = null
        
        return cart
    },

    async update({id}, options){
        if(!id) throw new Error ("ID не указан")
        const {userId} = options
        if(userId) throw new Error ("Нельзя изменить пользователя в корзине пользователя!")
        const cart = await Cart.findByIdAndUpdate(id, options, {new: true})
        return cart
    },

    async updateCount({userId, productId, count}){
        if(!userId || !productId || !count) throw new Error ("ID не указаны")
        const cart = await Cart.findOne({userId: userId})

        cart.items.forEach(element => {
            if(element.productId == productId) element.count = count
        })
        const updatedCart = await Cart.findByIdAndUpdate(cart._id, {items: cart.items}, {new: true}) 

        return updatedCart
    },
    
    async deleteFrom({userId, productId}){
        if(!userId || !productId) throw new Error ("ID не указаны")
        const cart = await Cart.findOne({userId: userId})

        const itemsArr = []
        cart.items.forEach(element => {
            if(element.productId != productId) itemsArr.push(element)
        })
        const updatedCart = await Cart.findByIdAndUpdate(cart._id, {items: itemsArr}, {new: true}) 
        return updatedCart
    },

    async clear({userId}){
        if(!userId) throw new Error ("UserId не указан")            
        const cart = await Cart.findOneAndUpdate({userId: userId}, {items: []}, {new: true})
        return cart
    },
}