const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    service:{
        type:String
    },
    message:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Inquiry = mongoose.model('Inquirys',inquirySchema)

module.exports = Inquiry