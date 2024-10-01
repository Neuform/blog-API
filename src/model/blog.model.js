const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    thumbnail:{
        type:String,
        default:"https://ik.imagekit.io/th3ofwc2g9/Process%20Flow%20(10).png?updatedAt=1727600177651"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
    }
})

const Blog = mongoose.model('blogs',blogSchema)
module.exports = Blog
