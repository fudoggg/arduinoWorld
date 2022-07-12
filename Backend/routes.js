const uuid = require('uuid')
const path = require('path')
const User = require('./api/user/User')
const { Router } = require('express')
const router = new Router()

router.post('/upload', function(req, res) {
    try {
        const {img} = req.files
        const fileName = uuid.v4() + '.jpg'
        const filePath = path.resolve(__dirname, 'uploads', fileName)
        img.mv(filePath)
        return res.json(fileName)
    } catch (e) {
        throw e
    }
  })

router.get('/activate/:link', async function(req, res) {
    try {
        const activationLink = req.params.link
        console.log(req)
        console.log(activationLink)
        const user = await User.findOne({activationLink})
        console.log(user)
        if(!user) throw new Error('Некорректная ссылка активации')
        user.status = "confirmed"
        await user.save()
        return res.redirect(process.env.CLIENT_URL)
    } catch (e) {
        throw e
    }
  })

  module.exports = router