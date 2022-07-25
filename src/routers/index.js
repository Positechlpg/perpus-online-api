const express = require("express")
const mainRouter = express.Router()
const book = require('./book');
const member = require('./member');


mainRouter.use('/book', book)
mainRouter.use('/member', member)

module.exports = mainRouter