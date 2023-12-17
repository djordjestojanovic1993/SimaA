const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//povezi mongoose sa bazom
mongoose.connect('mongodb://127.0.0.1:27017/simaAigumanov');

const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const routerAdvertisement = require('./routers/advertisement');
app.use('/advertisement', routerAdvertisement);

module.exports = app;