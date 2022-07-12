const User = require('./User')
const Role = require('../user_role/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mailer = require('../../mailer/service')
const uuid = require('uuid')

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
    async register({email, password, name}){
        try {
            if(!email || !password) {
                console.log('Почта или пароль не введены!')
                throw new Error('Почта или пароль не введены!')
            }
    
            const isEmail = emailRegExp.test(email) // проверка по регулярке
            if (isEmail) { // проверка на почту
                email = email.toLowerCase() // нижний регистр
                //status = 'confirmed' // переписать на сервис регистрации ( потверждение почты )
            } else {
                console.log('Некорректный email адрес!')
                throw new Error('Некорректный email адрес!')
            }
    
            const candidate = await User.findOne({ email: email })
            if(candidate) {
                console.log('Такой пользователь уже существует!')
                throw new Error('Такой пользователь уже существует!')
            }
            const hashedPassword = await bcrypt.hash(password, 8)
            const activationLink = uuid.v4()

            const createdAt = Date()
            const updatedAt = Date()
            const role = await Role.findOne({ role: "public" })

            const user = await User.create({email: email, password: hashedPassword, name: name, status: 'confirmed', role: role._id, createdAt: createdAt, updatedAt: updatedAt, activationLink})
            await mailer.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

            console.log('Пользователь создан!')
            return user
    
        } catch (error) {
            throw error
        }
    },

    async login({email, password}){
        try {
            if(!email || !password) {
                throw new Error('Почта или пароль не введены!')
            }
    
            const isEmail = emailRegExp.test(email) // проверка по регулярке
            if (isEmail) { // проверка на почту
                email = email.toLowerCase() // нижний регистр
                //status = 'confirmed' // переписать на сервис регистрации ( потверждение почты )
            } else {
                throw new Error('Некорректный email адрес!')
            }
    
            const user = await User.findOne({ email: email })
            if(!user) {
                throw new Error('Неверная почта или пароль!')
            }
    
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) {
                throw new Error('Неверная почта или пароль!')
            }
    
            const token = jwt.sign(
                {userId: user.id},
                process.env.JWT_SECRET,
                {expiresIn: '24h'}
            )
            
            const role = await Role.findById(user.role)
            //console.log(user.role, role, role.role)
            return {token, userId: user.id, userName: user.name, role: role.role}
        } catch (error) {
            throw error
        }
    },

    async getAll(){
        try {
            const users = await User.find()
            return users
        } catch (error) {
            throw error
        }
        
    },

    async getOne({id}){
        try {
            if(!id) throw new Error ("не указан ID")
            const user = await User.findById(id)
            if (!user) throw new Error ("Пользователь не найден")
            return user
        } catch (error) {
            throw error
        }
    },

    async update({id}, options){
        try {
            if(!id) throw new Error ("ID не указан")
            options.updatedAt = Date()
            const user = await User.findByIdAndUpdate(id, options, {new: true})
            if (!user) throw new Error ("Пользователь не найден")
            return user
        } catch (error) {
            throw error
        }
    },

    async updatePassword({id, lastPwd, newPwd}){
        try {
            if(!id) throw new Error ("ID не указан")
            let user = await User.findById(id)
            if (!user) throw new Error ("Пользователь не найден")

            const isMatch = await bcrypt.compare(lastPwd, user.password)
            if(!isMatch) {
                throw new Error('Неверная почта или пароль!')
            } else {

                const hashedPassword = await bcrypt.hash(newPwd, 8)
                user = await User.findByIdAndUpdate(id, {password: hashedPassword, updatedAt: Date()}, {new: true})

            }

            return user
        } catch (error) {
            throw error
        }
    },
    
    async delete({id}){
        try {
            if(!id) throw new Error ("ID не указан")            
            const user = await User.findByIdAndDelete(id)
            if (!user) throw new Error ("Пользователь не найден")
            return user
        } catch (error) {
            throw error
        }
    },
}