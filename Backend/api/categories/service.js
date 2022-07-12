const Category = require('./Categories')

module.exports = {
    async create({name, parentId, isParent}){
        createdAt = Date()
        updatedAt = Date()
        const newCategory = {
            name,
            parentId,
            isParent,
            createdAt,
            updatedAt
        }

        const category = await Category.create(newCategory)
        return category;
    },

    async get({id}){
        if(!id){
            const category = await Category.find()
            return category
        }
        const category = await Category.findById(id)
        return [category]
    },

    async getByParent({id}){
        const category = await Category.findById(id)

        const childs = await Category.find({parentId: category.parentId, isParent: false})
        return childs
    },

    async update({id}, options){
        if(!id){
            throw new Error ("ID не указан")
        }

        options.updatedAt = Date()

        const category = await Category.findByIdAndUpdate(id, options, {new: true})
        return category
    },
    
    async delete(id){
        if(!id) throw new Error ("ID не указан")            
        const category = await Category.findByIdAndDelete(id)
        return category
    },
}
