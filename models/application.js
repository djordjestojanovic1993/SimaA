const mongoose = require('mongoose');
const Participant = require("./advertisement");

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
        type: [{
            _id:false,
            name:{
                type:String,
                required: true,
                default: "Ime"
            },
            salary:{
                type:String,
                required: true,
                default: "Primanja"
            },
            type:{
                type:String,
                required: true,
                default: "Vrsta socijalne pomoci"
            },
            amounth:{
                type:String,
                required: true,
                default: "Iznos pomoci"
            }
        }]
    },
    priestName:{
        type:String,
        required: true,
        default: "Ime Svestenika"
    },
    Pdfs:{
        type: [String]
    },
    advertisement:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Advertisement",
        required: true,
    }
}, {collection: 'application'})

const ApplicationModel = mongoose.model('Application', applicationSchema);

const addAApplication = async function(applicationData){

    let newApplication = new ApplicationModel({
        _id: new mongoose.Types.ObjectId(),
        name: applicationData.name,
        birthPlace: applicationData.birthPlace,
        birthDate: applicationData.birthDate,
        address: applicationData.address,
        school: applicationData.school,
        schoolCurrentYear: applicationData.schoolCurrentYear,
        schoolYear: applicationData.schoolYear,
        phone: applicationData.phone,
        eMail: applicationData.eMail,
        priestName: applicationData.priestName,
        HouseMembrs: applicationData.membersArray,
        Pdfs: applicationData.filejsNames,
        advertisement: applicationData.advertisementID

        
    });

    return newApplication.save();
}

module.exports = {
    model : ApplicationModel,
    addAApplication
}