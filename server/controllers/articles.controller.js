var config = require('config.json');
var express = require('express');
var router = express.Router();
var uimaService = require('services/articles.service');

// routes
//use * route any path
router.get('/project/data/*/:_link', uimaText);


module.exports = router;

//read project uima
function uimaText(req, res){
    console.log("UIMA SERVICE "+req.params._link);
    uimaService.uimaText(req.params._link)
        .then(function (articles) { 
        	console.log("service = "+articles);
            res.send(articles);
           
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}