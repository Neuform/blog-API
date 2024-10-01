const Blog = require("../model/blog.model");
const User = require("../model/user.model");
const userService = require('../service/user.service')

const create = async (data,user) => {
  try {
    console.log(user)
    const result = new Blog({
      title:data.title,
      content:data.content,
      thumbnail:data.thumbnail,
      createdBy:user
    });
    
    const savedBlog = await result.save(); 
     // Update the user's blogs array by pushing the new blog ID
     user.blogs.push(savedBlog._id);

     // Save the updated user
     await user.save();
    return savedBlog; 
  } catch (error) {
    throw new Error('(service)Error creating blog: ' + error.message);
  }
};

const getAll = async ()=>{
  try {
    const blogs =await Blog.find()
    return blogs
  } catch (error) {
    throw new Error('(service):'+error.message)
  }
}

const  deleteById = async (id)=>{
  try {
    const deletedBlog =await Blog.findByIdAndDelete(id)
    console.log(deletedBlog)
    return deletedBlog
  } catch (error) {
    throw new Error('(service)'+error.message)
  }
}

const update = async (id,req)=>{
  try {
    const {title,content} = req.body
    const blog =await Blog.findByIdAndUpdate(id,{title,content,createdBy:req.user},{new:true})
    return blog
  } catch (error) {
    throw new Error("(service)"+error.message)
  }
}

const getUserBlogs = async(id)=>{
  try {
    const user = await User.findById(id)
    console.log("service error : "+user)
    const blogs =await Blog.find({createdBy:user})
    return blogs
  } catch (error) {
    throw new Error("(service)"+error.message)
  }
}



module.exports = {create,getAll,deleteById,update,getUserBlogs}

