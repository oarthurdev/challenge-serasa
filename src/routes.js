const express = require('express')

const CompanyController = require('./controllers/CompanyController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

routes.post('/auth', AuthController.auth)

routes.get('/company', AuthController.verifyJWT, CompanyController.index)
routes.post('/company', AuthController.verifyJWT, CompanyController.create)

module.exports = routes