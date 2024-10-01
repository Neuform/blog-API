
const mongoose = require('mongoose')

const mongodbUrl = "mongodb+srv://devneufrom:8JliFRTuth94fCxw@blogs.s46uo.mongodb.net/?retryWrites=true&w=majority&appName=Blogs"

const connectDb = () =>{
    return mongoose.connect(mongodbUrl)
}

module.exports={connectDb}