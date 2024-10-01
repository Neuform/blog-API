const bcrypt = require('bcryptjs')
const jwtProvider = require('../config/jwtProvider')
const User = require('../model/user.model')

const create = async(data)=>{
    try {
        let {username,email,password} = data
        password = await bcrypt.hash(password,8)

        const user = await User.create({username,password,email})
        return user;
    } catch (error) {
        throw new Error("(service): "+error.message)
    }
}

const findById= async(id)=>{
    try {
        const user = await User.findById(id).populate('blogs')
        await user.save()

        if(!user){
            throw new Error("User not found with id : ",id)
        }
    } catch (error) {
        throw new Error("(service): "+error.message)
    }
}

const findByUsername = async(username)=>{
    try {
        const user = await User.findOne({username})
        if(!user){
            throw new Error(username + ": not found!")
        }
        return user
    } catch (error) {
        throw new Error("(service): "+error.message)
    }
}

const getUserProfileByToken = async(token)=>{
    try {
        const userId = jwtProvider.getUserIdFromToken(token)
        const user = await User.findById(userId).populate('blogs')
        await user.save()

        if(!user){
            throw new Error("User not found !")
        }
        return user
    } catch (error) {
        throw new Error("(service): "+error.message)
    }
}

const getAll = async()=>{
    try {
        const users = await User.find()
        return users
    } catch (error) {
        throw new Error("(service): "+error.message)
    }
}

module.exports = {create,findById,findByUsername,getUserProfileByToken,getAll}