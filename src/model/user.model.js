const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"blogs"
        }
    ],
    role:{
        type:String,
        required:true,
        default:'ASSOCIATE'
    },
})

const User = mongoose.model('users',userSchema)
module.exports = User