const express = require('express')
const router = express.Router()
const controller = require('../controller/blog.controller')
const authenticate = require('../middleware/authenticate')

router.post('/create',authenticate,controller.createBlog)
router.get('/all',controller.getAllBlogs)
router.get('/:id/delete',authenticate,controller.deleteBlog)
router.put('/:id/update',authenticate,controller.updateBlog)
router.get('/:id',authenticate,controller.getUserBlogsController)
router.get('/:id/details',controller.getBlogById)






module.exports = router