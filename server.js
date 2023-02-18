const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://RIPVANWINKLE:plop@cluster0.rvosq.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})



app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);