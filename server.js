const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '25mb', extended: false }))

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://RIPVANWINKLE:plop@cluster0.rvosq.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})



app.use('/', indexRouter)
app.use('/authors', authorRouter)

app.listen(5500)