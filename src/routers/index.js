const express = require("express")
const mainRouter = express.Router()
const booksRouter = require('./book');
const user = require('./user');
const productRouter = require("./productRouter")


mainRouter.use('/book', booksRouter)
mainRouter.use('/user', user)
mainRouter.use('/product', productRouter)

module.exports = mainRouter
