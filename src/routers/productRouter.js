const express = require('express');
const productRouter = express.Router();
const productController = require("../controller/bookController")

productRouter.get("/",productController.get)
productRouter.post("/input",productController.insertData)
productRouter.patch("/:id", productController.updateData)

module.exports = productRouter;