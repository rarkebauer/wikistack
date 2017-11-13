'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/add', function (req, res, next) {
    res.render('addpage')
});

    //res.send('hit dynamic route at ' + req.params.urlTitle);
    router.get('/:urlTitle', function (req, res, next) {
        
          Page.findOne({ 
            where: { 
              urlTitle: req.params.urlTitle 
            } 
          })
          .then(function(foundPage){
            //res.send("HERE I AM")  
            // res.json(foundPage);
            res.render('wikipage', {
                page: foundPage


            })
          })
          .catch(next);
        
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
   // var urlTitle = urlTitleConverter(req.body.title);
    //console.log(urlTitle);
  var page = Page.build({
    title: req.body.title,
    //urlTitle: urlTitle,
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
  var pageProm = page.save();
  pageProm.then(function(entry){

    var urlTitle = entry.urlTitle
    console.log(entry, urlTitle)

    res.redirect('/wiki'+ urlTitle)
  }).catch(function(err){console.log(err)})
  

  user.save();
  // -> after save -> res.redirect('/');
});

router.post('/', function (req, res, next) {
    res.send('got to GET /wiki/add')
});

// router.get('/:urlTitle', function (req, res, next) {
//     res.send('hit dynamic route at ' + req.params.urlTitle);
//   });

module.exports = router
