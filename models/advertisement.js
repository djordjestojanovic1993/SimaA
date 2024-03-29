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
    subtitle:{
        type:String,
        required: true,
        default: "Podnaslov"
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
    },
    img:{
        type:String,
        default: "Slika"
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
        subtitle: advertisementData.subtitle,
        text: advertisementData.text,
        date: advertisementData.date,
        type: advertisementData.type,
        img: advertisementData.slika
    });

    return newAdvertisements.save();
}

const deleteAdvertismentById = async function(id){
    try {
        const result = await AdvertisementModel.deleteOne({ _id: id });
        return result;
      } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
      }
}

const changeAdvertisement = async function(advertisementData){
    try {
        const dokument = await AdvertisementModel.findById(advertisementData.id);
        if (!dokument) {
            console.log('Dokument nije pronađen.');
            return;
          }
          dokument.title = advertisementData.title;
          dokument.subtitle = advertisementData.subtitle;
          dokument.text = advertisementData.text;
          dokument.date = advertisementData.date;
          dokument.img = advertisementData.slika;

          await dokument.save();
          console.log('Podaci su uspešno promenjeni.');
          return dokument;
      } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
      }
}

const changeAdverisementWidthoutPicture = async function(advertisementData){
  console.log(advertisementData.subtitle)
    try {
        const dokument = await AdvertisementModel.findById(advertisementData.id);
        if (!dokument) {
            console.log('Dokument nije pronađen.');
            return;
          }
          dokument.title = advertisementData.title;
          dokument.subtitle = advertisementData.subtitle;
          dokument.text = advertisementData.text;
          dokument.date = advertisementData.date;

          await dokument.save();
          console.log('Podaci su uspešno promenjeni.');
      } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
      }
}

const getAdvertisementsBytype = async function (type) {
    try {
      // Koristimo Mongoose funkciju find() za pretragu
      const advertisements = await AdvertisementModel.find({ type: type });
  
      return advertisements;
    } catch (error) {
      throw error;
    }
  }
  const getAdvertisementsByID = async function (id) {
    try {
      // Koristimo Mongoose funkciju find() za pretragu
      const advertisements = await AdvertisementModel.find({ _id: id });
  
      return advertisements;
    } catch (error) {
      throw error;
    }
  }

  const getAdvertisementsByTypes = async function (types) {
    try {
      // Koristimo Mongoose funkciju find() sa $in operatorom za pretragu po više vrednosti
      const advertisements = await AdvertisementModel.find({ type: { $in: types } });
  
      return advertisements;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    model : AdvertisementModel,
    getAdvertisements,
    addAdvertisements,
    deleteAdvertismentById,
    changeAdvertisement,
    changeAdverisementWidthoutPicture,
    getAdvertisementsBytype,
    getAdvertisementsByTypes,
    getAdvertisementsByID
}