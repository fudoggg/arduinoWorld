const nodemailer = require('nodemailer')
const Product = require('../api/products/Product')

const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
})

module.exports = {
    async sendActivationMail(to, link) {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: "Активация аккаунта на " + process.env.API_URL,
            text: '',
            html: 
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    },

    async orderCheck(to, order) {
        let sum = 0
        const date = new Date(order.createdAt).toLocaleString()
        let orderCheckHtml =    `
                                <div>
                                    <h1>ArduinoWorld</h1>
                                    <h2>Заказ № ${order.number} от ${date}</h2>
                                    <h3>_________________________________</h3>
                                `

        for(let i = 0; i < order.items.length; i++) {
            let product = await Product.findById(order.items[i].productId)
            sum += product.price * order.items[i].count
            orderCheckHtml +=   `
                                    <h3>${product.name}</h3>
                                    <h3>${order.items[i].count} X ${product.price} = ${product.price * order.items[i].count}</h3>
                                    <h3>_________________________________</h3>
                                ` 
        }

        orderCheckHtml +=   `
                                <h2>Всего: ${sum}</h2>
                                </div>
                            `

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: "Чек о покупке в магазине ArduinoWorld ", //+ process.env.API_URL,
            text: '',
            html: orderCheckHtml
        })
    }
}