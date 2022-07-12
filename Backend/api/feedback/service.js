const Feedback = require('./Feedback')
const Product = require('../products/Product')
const mongoose = require('mongoose')

module.exports = {
    async create(options){
        try {
            options.createdAt = Date()
            options.updatedAt = Date()
            const feedback = await Feedback.create(options)

            const {productId} = options
            const product = await Product.findById(productId)
            product.rating = (product.rating * product.feedback.length + options.rate) / (product.feedback.length + 1)
            product.feedback.push(feedback.id)
            await Product.findByIdAndUpdate(productId, product, {new: true})

            return feedback
        } catch (e) {
            return e
        }
        
    },

    async get({id}){
        if(!id){
            const feedback = await Feedback.find()
            return feedback
        }
        const feedback = await Feedback.findById(id)
        return [feedback]
    },

    async getByProductId({productId}){
        if(!productId) throw new Error ("ProductId не указан")
        //const feedback = await Feedback.find({productId: productId})

        const feedback = await Feedback.aggregate([
            {$match: {productId: mongoose.Types.ObjectId(productId)}},

            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userId"
                }
            }
        ])
        console.log(feedback[0])


        return feedback
    },

    async getByUserId({userId}){
        if(!userId) throw new Error ("UserId не указан")
        const feedback = await Feedback.find({userId: userId})
        return feedback
    },

    async getByUserAndProductId({userId}){
        if(!userId || productId) throw new Error ("UserId и productId не указаны!")
        const feedback = await Feedback.find({userId: userId, productId: productId})
        return feedback
    },

    async update({id}, options){
        try {
            if(!id) throw new Error ("ID не указан")
            options.updatedAt = Date()
            const oldFeedback = await Feedback.findById(id)
            const feedback = await Feedback.findByIdAndUpdate(id, options, {new: true})

            const {productId} = feedback
            const product = await Product.findById(productId)
            product.rating = (product.rating * product.feedback.length - oldFeedback.rate + feedback.rate) / product.feedback.length
            await Product.findByIdAndUpdate(productId, product, {new: true})

            return feedback
        } catch (e) {
            return e
        }
    },
    
    async delete({id}){
        try {
            if(!id) throw new Error ("ID не указан")
            const feedback = await Feedback.findByIdAndDelete(id)

            const {productId} = feedback
            const product = await Product.findById(productId)

            if(product.feedback.length !== 1) {
                product.rating = (product.rating * product.feedback.length - feedback.rate) / (product.feedback.length - 1)
            } else product.rating = 0

            const feedbackArr = []
            product.feedback.forEach(element => {
                if(element != id) feedbackArr.push(element)
            })
            product.feedback = feedbackArr
            await Product.findByIdAndUpdate(productId, product, {new: true})

            return feedback
        } catch (e) {
            return e
        }
    },
}