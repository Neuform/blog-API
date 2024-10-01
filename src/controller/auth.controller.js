const service = require('../service/user.service')
const jwtProvider = require('../config/jwtProvider')
const bcrypt = require("bcryptjs")

const register = async(req,res)=>{
    try {
        const user = await service.create(req.body)
        const jwt = jwtProvider.generateToken(user._id)
        console.log("inside controller")
        await user.save()
        return res.status(200).send({message:"User created : "+jwt})
    } catch (error) {
        return res.status(500).send({error:error.message})        
    }
}

const login = async(req,res)=>{
    const {username,password} = req.body
    try {
        const user = await service.findByUsername(username)
        if(!user){
            return res.status(404).send({message:"User not found with USERNAME : "+username})
        }

        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.status(401).send({message:"Invalid Password !"})
        }

        const jwt = jwtProvider.generateToken(user._id)
        return res.status(200).send({message:"Login successful",jwt})
    } catch (error) {
        return res.status(500).send({error:error.message})        
    }
}
module.exports = {login,register}