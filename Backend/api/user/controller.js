const UserService = require('./service')
const Cart = require('../cart/Cart')
const Favorite = require('../favorite/Favorite')

module.exports = {
    async register(options){
        try{
            const {email, password, name} = options
            const user = await UserService.register({email, password, name})

            const isFirst = await Cart.findOne({userId: user.id})
            if(!isFirst) {
                await Cart.create({userId: user.id})
                await Favorite.create({userId: user.id})
            }

            return user
        }catch(e){
            return e
        }
    },

    async login(options){
        try{
            const {email, password} = options
            const user = await UserService.login({email, password})
            return user
        }catch(e){
            return e
        }
    },

    async getAll(){
        try{
            const users = await UserService.getAll()
            return users
        }catch(e){
            return e
        }
    },

    async getOne(options){
        try{
            const {id} = options
            const user = await UserService.getOne({id})
            return user
        }catch(e){
            return e
        }
    },

    async update(options){
        try{
            const {id} = options
            const user = await UserService.update({id}, options)
            return user
        }catch(e){
            return e
        }
    },

    async updatePassword(options){
        try{
            const user = await UserService.updatePassword(options)
            return user
        }catch(e){
            return e
        }
    },
    
    async delete(options){
        try{
            const {id} = options
            await Cart.deleteOne({userId: id})
            await Favorite.deleteOne({userId: id})
            const user = await UserService.delete({id})
            return user
        }catch(e){
            return e
        }
    }
}
