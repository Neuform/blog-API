const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.json())



app.use(cors())



const blogRouter = require('./routes/blog.routes')
app.use('/blog',blogRouter)

const authRouter = require('./routes/auth.routes')
app.use('/auth',authRouter)

const userRouter = require('./routes/user.routes')
app.use('/user',userRouter)

module.exports = app