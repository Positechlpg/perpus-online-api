const express = require("express")
const mainRouter = express.Router()
const booksRouter = require('./book');
//const user = require('./user');

// mainRouter.get ('/', function(req, res) {
//     res.send('wicing orboys')
// })


mainRouter.use('/book', booksRouter)
//mainRouter.use('/user', user)

module.exports = mainRouter