'use strict';
var express = require('express');
var router = express.Router();
var model = require('../models');

module.exports = function makeRouterWithSockets (io) {

router.get('/', function(req, res, next){
  res.render('index');
});

  return router;
}
