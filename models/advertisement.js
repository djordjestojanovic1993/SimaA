const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:{
        type:String,
        required: true,
        default: "Naslov"
    },
    text:{
        type:String,
        required: true,
        default: "Text"
    },
    date:{
        type:String,
        default: ""
    },
    type:{
        type:String,
        required: true,
        default: "Vrsta"
    }
}, {collection: 'advertisements'})

const AdvertisementModel = mongoose.model('Advertisement', advertisementSchema);

const getAdvertisements = async function(){

    let advertisements = await AdvertisementModel.find().exec();
    if(advertisements.length > 0){
        return advertisements;
    }else{
        return null;
    }
}


const addAdvertisements = async function(advertisementData){
    let newAdvertisements = new AdvertisementModel({
        _id: new mongoose.Types.ObjectId(),
        title: advertisementData.title,
        text: advertisementData.text,
        date: advertisementData.date,
        type: advertisementData.type
    });

    return newAdvertisements.save();
}

module.exports = {
    model : AdvertisementModel,
    getAdvertisements,
    addAdvertisements
}