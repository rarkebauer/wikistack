'use strict';
var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/add', function (req, res, next) {
    res.render('addpage')
});

router.get('/', function (req, res, next) {
    // console.log("testing this?")
    // res.send('got to GET /wiki/')
    res.redirect('/')
});

router.post('/', function (req, res, next) {
    res.send('got to POST /wiki/')
});

router.post('/', function (req, res, next) {
    res.send('got to GET /wiki/add')
});


module.exports = router
