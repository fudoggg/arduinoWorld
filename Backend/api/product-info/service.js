const ProductInfo = require('./ProductInfo')
const Product = require('../products/Product')

module.exports = {
    async create(options){
        options.createdAt = Date()
        options.updatedAt = Date()
        const productInfo = await ProductInfo.create(options)

        const {productId} = options
        const product = await Product.findById(productId)
        product.productInfo.push(productInfo._id)
        await Product.findByIdAndUpdate(productId, product, {new: true})

        return productInfo;
    },

    async get({id}){
        if(!id){
            const productInfo = await ProductInfo.find()
            return productInfo
        }
        const productInfo = await ProductInfo.findById(id)
        return [productInfo]
    },

    async getProductInfo({productId}){
        try{
            if(!productId) throw new Error ("ProductId не указан")
            const productInfo = await ProductInfo.find({productId: productId})
            return productInfo
        }catch(e){
            return e
        }
    },

    async update({id}, options){
        if(!id) throw new Error ("ID не указан")
        options.updatedAt = Date()
        const productInfo = await ProductInfo.findByIdAndUpdate(id, options, {new: true})
        return productInfo
    },
    
    async delete({id}){
        if(!id) throw new Error ("ID не указан")            
        const productInfo = await ProductInfo.findByIdAndDelete(id)

        const {productId} = productInfo
        const product = await Product.findById(productId)

        const infoArr = []
        product.productInfo.forEach(element => {
            if(element != id) infoArr.push(element)
        })
        product.productInfo = infoArr
        await Product.findByIdAndUpdate(productId, product, {new: true})

        return productInfo
    }
}