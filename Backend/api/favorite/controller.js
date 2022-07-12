const FavoriteService = require('./service')

module.exports =  {
    async addTo(options){
        try{
            const {userId, productId} = options
            const favorite = await FavoriteService.addTo({userId, productId})
            return favorite
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const favorite = await FavoriteService.get({id})
            return favorite
        }catch(e){
            return e
        }
    },

    async getByUserID(options){
        try{
            const {userId} = options
            const favorite = await FavoriteService.getByUserID({userId})
            return favorite
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const favorite = await FavoriteService.update({id}, options)
            return favorite
        }catch(e){
            return e
        }
    },
    
    async deleteFrom(options){
        try{
            const {userId, productId} = options
            const favorite = await FavoriteService.deleteFrom({userId, productId})
            return favorite
        }catch(e){
            return e
        }
    },

    async clearByUserID(options){
        try{
            const {userId} = options
            const favorite = await FavoriteService.clear({userId})
            return favorite
        }catch(e){
            return e
        }
    },
}