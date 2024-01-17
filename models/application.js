const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:{
        type:String,
        required: true,
        default: "Ime Prezime"
    },
    birthPlace:{
        type:String,
        required: true,
        default: "Mesto Rodjenja"
    },
    birthDate:{
        type:String,
        required: true,
        default: "Datum rodjenja"
    },
    address:{
        type:String,
        required: true,
        default: "Adresa"
    },
    school:{
        type:String,
        required: true,
        default: "Skola/fakultet"
    },
    schoolCurrentYear:{
        type:String,
        required: true,
        default: "Poceo da studira"
    },
    schoolYear:{
        type:String,
        required: true,
        default: "Put upisao godinu"
    },
    phone:{
        type:String,
        required: true,
        default: "Telefon"
    },
    eMail:{
        type:String,
        required: true,
        default: "e-mail"
    },
    HouseMembrs:{
    },
    priestName:{
        type:String,
        required: true,
        default: "Ime Svestenika"
    }
}, {collection: 'application'})

const ApplicationModel = mongoose.model('Application', applicationSchema);

const addAApplication = async function(advertisementData){
    let newAdvertisements = new ApplicationModel({
        _id: new mongoose.Types.ObjectId(),
        name: advertisementData.name,
        birthPlace: advertisementData.birthPlace,
        birthDate: advertisementData.birthDate,
        address: advertisementData.address,
        school: advertisementData.school,
        schoolCurrentYear: advertisementData.schoolCurrentYear,
        schoolYear: advertisementData.schoolYear,
        phone: advertisementData.phone,
        eMail: advertisementData.eMail,
        priestName: advertisementData.priestName
    });

    return newAdvertisements.save();
}

module.exports = {
    model : ApplicationModel,
    addAApplication
}