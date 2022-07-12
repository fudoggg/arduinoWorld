const FeedbackService = require('./service')

module.exports = {
    async create(options){
        try{
            const feedback = await FeedbackService.create(options)
            return feedback
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const feedback = await FeedbackService.get({id})
            return feedback
        }catch(e){
            return e
        }
    },
      
    async getByProductId(options){
        try {
            const {productId} = options
            const feedback = await FeedbackService.getByProductId({productId})
            return feedback
        } catch (e) {
            return e
        }
    },

    async getByUserId(options){
        try {
            const {userId} = options
            const feedback = await FeedbackService.getByProductId({userId})
            return feedback
        } catch (e) {
            return e
        }
    },

    async getByUserAndProductId(options){
        try {
            const {userId, productId} = options
            const feedback = await FeedbackService.getByUserAndProductId({userId, productId})
            return feedback
        } catch (e) {
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const feedback = await FeedbackService.update({id}, options)
            return feedback
        }catch(e){
            return e
        }
    },
    
    async delete(options){
        try{
            const {id} = options
            const feedback = await FeedbackService.delete({id})
            return feedback
        }catch(e){
            return e
        }
    },
}