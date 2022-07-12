require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const schemaUser = require('./graph/schema')
const resolverUser = require('./graph/resolver')
const fileUpload = require('express-fileupload')
const router = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(fileUpload({}))
app.use(express.static('uploads'))
app.use('/api', router)
app.use(graphqlHTTP({
    schema: schemaUser,
    rootValue: resolverUser,
    graphiql: true
}))

const PORT = process.env.PORT || 3001

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URI)
        app.get('/', (req, res) => res.send('Rabotaem bratya!'))
        app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
    } catch (error) {
        throw error
    }
}

startApp()
//mongodb+srv://root:root@practice.1hiv9.mongodb.net/test?authSource=admin&replicaSet=atlas-4ll7w2-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true