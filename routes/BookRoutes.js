const express = require('express');
const routes = express.Router();
const BookController = require('../controllers/BookController')

//get
routes.get('/all', BookController.GetAllBook);
routes.get('/find/:id', BookController.FindBook);
routes.get('/delete/:id', BookController.DeletBook);

//post
routes.post('/addBook', BookController.AddBook);

//put
routes.put('/update/:id', BookController.UpdateBook);

module.exports = routes;
