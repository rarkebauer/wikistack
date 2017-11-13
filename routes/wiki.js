'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/add', function (req, res, next) {
    res.render('addpage')
});

router.get('/', function (req, res, next) {
    // console.log("testing this?")
    // res.send('got to GET /wiki/')
    res.redirect('/')
});

router.post('/', function (req, res, next) {
    // res.json(req.body);
    // {
    //     "name": "asdf",
    //     "email": "asd",
    //     "title": "asdf",
    //      "content": "asdf",
    //     "status": "asdfads"
    //     }

      // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
    var urlTitle = urlTitleConverter(req.body.title);
    console.log(urlTitle);
  var page = Page.build({
    title: req.body.title,
    urlTitle: urlTitle,
    content: req.body.content,
    status: req.body.status
  });

  var user = User.build({
    name: req.body.name,
    email: req.body.email
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save();
  user.save();
  // -> after save -> res.redirect('/');
  res.redirect('/')
});

router.post('/', function (req, res, next) {
    res.send('got to GET /wiki/add')
});


module.exports = router

function urlTitleConverter(str){
    // var urlTitle = req.body.title.split(' ').join('_');
    // urlTitle = urlTitle[urlTitle.length - 1] === '_' ? urlTitle.slice(0, urlTitle.length - 1) : urlTitle;
    return str;
}
