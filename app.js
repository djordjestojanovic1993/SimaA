const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//povezi mongoose sa bazom
mongoose.connect('mongodb://127.0.0.1:27017/simaAigumanov');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

const routerAdvertisement = require('./routers/advertisement');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/advertisement', routerAdvertisement);

app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;