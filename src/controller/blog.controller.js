const Blog = require("../model/blog.model");
const { create } = require("../service/blog.service");
 const service = require('../service/blog.service')

const createBlog = async (req, res) => {
  try {
   
    const data = req.body;
    console.log("create blog : ",data)
    const result = await create(data,req.user);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllBlogs = async (req,res) =>{
    try {
        const blogs = await service.getAll()
        res.status(200).send(blogs)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}


const deleteBlog = async (req,res)=>{
    try {
        const id = req.params.id
        console.log("Deletion Id : "+id)
        const blog = await service.deleteById(id)
        res.status(200).send(blog)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const updateBlog = async(req,res)=>{
    try {
        const id = req.params.id
        const blog = await service.update(id,req)
        res.status(200).send(blog)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const getUserBlogsController = async(req,res)=>{
    try {
        // console.log(req.params.id)
        const blogs = await service.getUserBlogs(req.params.id)
        res.status(200).send(blogs)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const getBlogById = async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id)
        return res.status(200).send(blog)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}


module.exports = { createBlog ,getAllBlogs, deleteBlog, updateBlog, getUserBlogsController, getBlogById};
