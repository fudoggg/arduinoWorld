const Order = require('./Order')
const User = require('../user/User')
const mailer = require('../../mailer/service')
const ProductController = require('../products/controller')

module.exports = {
    async create(options){
        const user = await User.findById(options.user.userId)
        const number = await Order.find().sort({createdAt: -1})
        options.status = 'Не подтвержден'
        options.createdAt = Date()
        options.updatedAt = Date()
        options.number = 1 + number[0].number || 0

        options.items.forEach(elem => {
            ProductController.addCount({id: elem.productId, count: elem.count * -1})
        })

        const order = await Order.create(options)
        
        await mailer.orderCheck(user.email, order)

        return order
    },

    async get({id}){
        if(!id) {
            const order = await Order.find()
            return order
        }
        const order = await Order.findById(id)
        return [order]
    },

    async getByUserId({userId}){
        if(!userId) throw new Error ("не указан ID")
        const order = await Order.find({'user.userId': userId})
        return order
    },

    async updateStatus(options){
        if(!options.id) throw new Error ("не указан ID")
        const order = await Order.findByIdAndUpdate(options.id, {status: options.status, updatedAt: Date()}, {new: true})
        return order
    },

    async update(options){
        if(!options.id){
            throw new Error ("ID не указан")
        }
        options.updatedAt = Date()
        const order = await Order.findByIdAndUpdate(options.id, options, {new: true})
        return order
    },
    
    async delete({id}){
        if(!id) throw new Error ("ID не указан")            
        const order = await Order.findByIdAndDelete(id)
        return order
    },
}