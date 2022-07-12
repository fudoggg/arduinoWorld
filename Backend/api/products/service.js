const Product = require('./Product')
const Category = require('../categories/Categories')
const mongoose = require('mongoose')


module.exports = {
    async create(options){
        options.createdAt = Date()
        options.updatedAt = Date()
        const product = await Product.create(options)
        return product;
    },

    async searchProductsOrCategories({search}){
        const category = await Category.find({name: RegExp(search, "i")})       //
        const product = await Product.find({name: RegExp(search, "i")})         // не бейте...
        const catPlusPro = [...category, ...product]                            //

        return catPlusPro
    },

    async getProductInCategories({categoryId, sortByRate, startPrice, endPrice, skip, limit}){
        if(!categoryId) {
            const product = await Product.find().sort({rating: -1})
            return product
        }

        if(!startPrice) startPrice = 0
        if(!endPrice) endPrice = 10000000

        const category = await Category.findById(categoryId)

        if(category.isParent === false) {
            const product = await Product.find({category: categoryId}).sort({rating: -1})
            return product
        } else {
            const parentsCategories = await Category.find({parentId: category.parentId})

            const categories = []

            parentsCategories.forEach(element => {
                categories.push(element._id)
            })

            const aggr = [
                {$match: {category: {$in: categories}}},

                {$match: {price: {$lt: endPrice, $gt: startPrice}}}
            ]

            if(sortByRate) aggr.push({$sort: {rating: -1}})
            else aggr.push({$sort: {price: -1}})

            if(limit) {
                if(!skip) skip = 0
                aggr.push(
                    { $skip: skip },
                    { $limit: limit },
                )
            }

            const product = await Product.aggregate(aggr)

            return product
        }
    },

    async get({id}){
        if(!id){
            throw new Error ("ID не указан")
        }
        const [product] = await Product.aggregate([
            {$match: {_id: mongoose.Types.ObjectId(id)}},
            {
                $lookup: {
                    from: "productinfos",
                    localField: "productInfo",
                    foreignField: "_id",
                    as: "productInfo"
                }
            },
            {   
                $lookup: {
                    from: "feedbacks",
                    localField: "feedback",
                    foreignField: "_id",
                    as: "feedback"
                }
            },
            {$unwind: {path: "$feedback", preserveNullAndEmptyArrays: true}},
            {
                $lookup: {
                    from: "users",
                    localField: "feedback.userId",
                    foreignField: "_id",
                    as: "feedback.userId"
                }
            },
            {$unwind: {path: "$feedback.userId", preserveNullAndEmptyArrays: true}},
            {$unwind: {path: "$productInfo", preserveNullAndEmptyArrays: true}},
            {
                $group:{
                    _id: "$_id",
                    price: {$first: "$price"},
                    quantity: {$first: "$quantity"},
                    name: {$first: "$name"},
                    description: {$first: "$description"},
                    createdAt: {$first: "$createdAt"},
                    updatedAt: {$first: "$updatedAt"},
                    category: {$first: "$category"},
                    img: {$first: "$img"},
                    rating: {$first: "$rating"},
                    feedback: { $addToSet: "$feedback" },
                    productInfo: { $addToSet: "$productInfo" }
                }
            }
        ])

        return product
    },

    async update({id}, options){
        if(!id){
            throw new Error ("ID не указан")
        }

        options.updatedAt = Date()

        const product = await Product.findByIdAndUpdate(id, options, {new: true})
        return product
    },

    async addCount({id, count}){
        if(!id) throw new Error ("ID не указан")
        const productOld = await Product.findById(id)
        const quantity = productOld.quantity + count
        if(quantity < 0) throw new Error ("Количество не может быть отрицательнм!")
        const product = await Product.findByIdAndUpdate(id, {updatedAt: Date(), quantity: quantity}, {new: true})
        return product
    },
    
    async delete(id){
        if(!id) throw new Error ("ID не указан")            
        const product = await Product.findByIdAndDelete(id)
        console.log(product)
        return product
    },
}
