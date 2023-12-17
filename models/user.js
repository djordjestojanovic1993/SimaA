const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username:{
        type:String,
        required: true,
        default: "Admin"
    },
    username:{
        type:String,
        required: true,
        default: "Admin"
    }
}, {collection: 'users'})

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel,
}