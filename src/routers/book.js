 const express = require('express');
const booksRouter = express.Router();
const bookController = require('../controller/produkcontroller')

booksRouter.post('/', bookController.postBook);
booksRouter.patch("/:id", bookController.putBook);
// booksRouter.get("/input", bookController, updatetData)
//booksRouter.put('/produk/id', bookController.putBook);



module.exports = booksRouter;