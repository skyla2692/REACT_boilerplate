const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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


user_schema.pre('save', function(next){
    // 비밀번호를 암호화 하기

    var user = this;    // == schema

    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash

                next()
            })
        })
    }
})


const USER = mongoose.model('USER', user_schema);

module.exports = {USER};