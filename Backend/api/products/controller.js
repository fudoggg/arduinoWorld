const ProductService = require('./service')

module.exports = {
    async create(options){
        try{
            const product = await ProductService.create(options)
            return product
        }catch(e){
            return e
        }
    },

    async searchProductsOrCategories(options) {
        try{
            const product = await ProductService.searchProductsOrCategories(options)
            return product
        }catch(e){
            return e
        }
    },

    async getProductInCategories(options) {
        try{
            const product = await ProductService.getProductInCategories(options)
            return product
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const product = await ProductService.get({id})
            return product
        }catch(e){
            return e
        }
    },

    async addCount(options){
        try{
            const {id, count} = options
            const product = await ProductService.addCount({id, count})
            return product
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const product = await ProductService.update({id}, options)
            return product
        }catch(e){
            return e
        }
    },
    
    async delete(options){
        try{
            const {id} = options
            const product = await ProductService.delete(id)
            return product
        }catch(e){
            return e
        }
    },
}