'use strict';
var express = require('express');
var router = express.Router();
var model = require('../models');
var wiki = require('./wiki.js')
var user = require('./user.js')


router.use('/wiki', wiki);

router.use('/', function(req, res, next){
    res.render('index');
  });




module.exports = router