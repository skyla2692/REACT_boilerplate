const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
        required: true
    },
    password: {
        type: String,
        maxlength: 50,
        required: true
    },
    lastname: {
        type: String,
        maxlength: 50,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const USER = mongoose.model('USER', user_schema);

module.exports = {USER};