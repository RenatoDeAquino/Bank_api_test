const express = require('express')
const app = express()
const router = express.Router()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://user1:1secret2life3@abf-gyvot.mongodb.net/test?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const info = require('./models/card-info')
const index = require('./routes/index_route')
const card_info = require('./routes/card_route')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: false}))


app.use('/', index)
app.use('/card-info', card_info)

module.exports = app