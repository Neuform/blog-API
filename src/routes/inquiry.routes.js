const express = require('express')
const router = express.Router()
const controller = require('../controller/inquiry.controller')

router.post('/create',controller.createInquiry)

module.exports = router