const express = require('express')
const router = express.Router()
const controller = require('../controller/application.controller')

router.post('/create',controller.createApplication)

module.exports = router