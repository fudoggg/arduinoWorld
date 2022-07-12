const ProductInfoService = require('./service')

module.exports = {
    async create(options){
        try{
            const productInfo = await ProductInfoService.create(options)
            return productInfo
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const productInfo = await ProductInfoService.get({id})
            return productInfo
        }catch(e){
            return e
        }
    },

    async getProductInfo(options){
        try{
            const {productId} = options
            const productInfo = await ProductInfoService.getProductInfo({productId})
            return productInfo
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const productInfo = await ProductInfoService.update({id}, options)
            return productInfo
        }catch(e){
            return e
        }
    },
    
    async delete(options){
        try{
            const {id} = options
            const productInfo = await ProductInfoService.delete({id})
            return productInfo
        }catch(e){
            return e
        }
    }
}