const CategoriesService = require('./service')
const Category = require('./Categories')


module.exports = {
    async create(options){
        try{
            const {name, parentId, isParent} = options

            let category = await CategoriesService.create({name, parentId, isParent})

            if(!category.parentId) category = await Category.findByIdAndUpdate(category._id, {parentId: category._id}, {new: true})

            return category
        }catch(e){
            return e
        }
    },

    async get(options){
        try{
            const {id} = options
            const category = await CategoriesService.get({id})
            return category
        }catch(e){
            return e
        }
    },

    async getByParent(options){
        try{
            const {id} = options
            const category = await CategoriesService.getByParent({id})
            return category
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const category = await CategoriesService.update({id}, options)
            return category
        }catch(e){
            return e
        }
    },
    
    async delete(options){
        try{
            const {id} = options
            const category = await CategoriesService.delete(id)
            return category
        }catch(e){
            return e
        }
    },
}