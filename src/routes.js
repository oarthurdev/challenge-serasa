const express = require('express')

const CompanyController = require('./controllers/CompanyController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

routes.post('/auth/login', AuthController.index)
routes.post('/auth/register', AuthController.register)
routes.post('/auth/logout', AuthController.logout)

routes.get('/company', AuthController.verifyJWT, CompanyController.index)

module.exports = routes