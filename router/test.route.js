const express = require('express')
const { testController } = require('../controllers/test.controller')
const testrouter = express.Router()
testrouter.post('/', testController)

module.exports = testrouter
