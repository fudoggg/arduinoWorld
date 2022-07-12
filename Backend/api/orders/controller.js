const OrderService = require('./service')

module.exports =  {
    async create(options){
        try{
            const order = await OrderService.create(options)
            return order
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const order = await OrderService.get({id})
            return order
        }catch(e){
            return e
        }
    },

    async getByUserId(options){
        try{
            const order = await OrderService.getByUserId(options)
            return order
        }catch(e){
            return e
        }
    },

    async updateStatus(options){
        try{
            const order = await OrderService.updateStatus(options)
            return order
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const order = await OrderService.update(options)
            return order
        }catch(e){
            return e
        }
    },
    
    async delete(options){
        try{
            const {id} = options
            const order = await OrderService.delete({id})
            return order
        }catch(e){
            return e
        }
    },
}