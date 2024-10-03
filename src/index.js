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

const applicationRouter = require('./routes/application.routes')
app.use('/application',applicationRouter)

const inquiryRouter = require('./routes/inquiry.routes')
app.use('/inquiry',inquiryRouter)

//imageKit Setup
const ImageKit = require('imagekit');

const imageKit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/th3ofwc2g9',
  publicKey: 'public_6tUGgqw8R6Q4dipsSgh1yY7bJF8=',
  privateKey: 'private_0l9r1BFOUYWk/Vze5jrWZBFVL/o='
});
app.get('/imageKit', function (req, res) {
  var result = imageKit.getAuthenticationParameters();
  res.send(result);
});


module.exports = app