'use strict';
var express = require('express');
var router = express.Router();
var client = require('../db/index.js');

module.exports = function makeRouterWithSockets (io) {

router.get('/', function(req, res, next){
  res.render('index');
});

  return router;
}
