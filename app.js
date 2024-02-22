const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//povezi mongoose sa bazom
mongoose.connect('mongodb+srv://djordjestojanovic:v6sOSDm9bRSELqHC@sima.ytrctvz.mongodb.net/sima?retryWrites=true&w=majority&appName=sima');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());


const routerAdvertisement = require('./routers/advertisement');
const routerApplication= require('./routers/application');
const routerPages = require('./routers/pages');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/advertisement', routerAdvertisement);
app.use('/application', routerApplication);
app.use('/pages', routerPages)


app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next){
    console.log("Greska na serveru! " + err);
    res.status(500).send("Doslo je do greske na serveru");
});


module.exports = app;