const express = require('express');
const route = express.Router();
const controller = require('../controller/bookController')

route.update('/product',function(req, res){
    res.send('product')
})


module.exports = route;