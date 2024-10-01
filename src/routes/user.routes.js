const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const controller = require('../controller/user.controller')

router.get('/profile',authenticate,controller.getUser)

module.exports = router