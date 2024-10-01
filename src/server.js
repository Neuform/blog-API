const app = require('./index')
const PORT = 5858
const {connectDb} = require('./config/dbConfig')


app.listen(PORT,async()=>{
    await connectDb()
    console.log("Server listening on ",PORT)

})

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Neuform Blogs")
})
