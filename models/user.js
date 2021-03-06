const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }, firstname: {
        type: String,
        required: true
    },
    secondname: {
        type: String,
        required: true
    },age: {
        type: Number,
        required: true,
        min: 0
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    myChats: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'chats'
        }
    }]
    
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);