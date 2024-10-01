const service = require('../service/user.service')
const jwtProvider = require('../config/jwtProvider')
const User = require('../model/user.model')

const authenticate = async(req,res,next)=>{

    try {
        const token = req.headers.authorization?.split(" ")[1]
        console.log("in middle ware")
        console.log(token)
        if(!token){
            return res.status(404).send({error:"Token not found!"})
        }
        const userId = jwtProvider.getUserIdFromToken(token)
        const user = await User.findById(userId)
        req.user = user
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
    next()
}

module.exports = authenticate