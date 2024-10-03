const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    applicant:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    position:{
        type:String
    },
    role:{
        type:String
    },
    address:{
        type:String
    },
    resume:{
        type:String
    }
})

const Application = mongoose.model('applications',applicationSchema)
module.exports = Application