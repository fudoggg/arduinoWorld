const CartService = require('./service')

module.exports =  {
    async addTo(options){
        try{
            const {userId, productId, count} = options
            const cart = await CartService.addTo({userId, productId, count})
            return cart
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const cart = await CartService.get({id})
            return cart
        }catch(e){
            return e
        }
    },

    async getByUserID(options){
        try{
            const {userId} = options
            const cart = await CartService.getByUserID({userId})
            return cart
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const cart = await CartService.update({id}, options)
            return cart
        }catch(e){
            return e
        }
    },

    async updateCount(options){
        try{
            const {userId, productId, count} = options
            const cart = await CartService.updateCount({userId, productId, count})
            return cart
        }catch(e){
            return e
        }
    },
    
    async deleteFrom(options){
        try{
            const {userId, productId} = options
            const cart = await CartService.deleteFrom({userId, productId})
            return cart
        }catch(e){
            return e
        }
    },

    async clearByUserID(options){
        try{
            const {userId} = options
            const cart = await CartService.clear({userId})
            return cart
        }catch(e){
            return e
        }
    },
}