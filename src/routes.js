const express = require('express');

const ProductController = require('./controllers/ProductController');
const ProductImagesController = require('./controllers/ProductImagesController');
const CompanyController = require('./controllers/CompanyController');
const CompanyProductsController = require('./controllers/CompanyProductsController');

const routes = express.Router();

// routes.post('/sessions', SessionController.create);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.delete('/products', ProductController.delete);

routes.get('/product-images', ProductImagesController.index);
routes.post('/product-images', ProductImagesController.create);
routes.delete('/product-images', ProductImagesController.delete);

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);
routes.delete('/company', CompanyController.delete);

routes.get('/company-products', CompanyProductsController.index);
routes.post('/company-products', CompanyProductsController.create);
routes.delete('/company-products', CompanyProductsController.delete);

module.exports = routes;