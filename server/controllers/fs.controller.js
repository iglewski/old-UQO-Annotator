var config = require('config.json');
var express = require('express');
var router = express.Router();
var fileService = require('services/fs.service');

// routes
router.get('/getCorpus', getCorpus);
router.get('/FilesCorpus/data/:_Corpus', FilesCorpus);

module.exports = router;

function getCorpus(req, res) {
    fileService.getCorpus()
        .then(function (fs) {
            res.send(fs);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function FilesCorpus(req, res) {
    console.log("req1 "+req.params._Corpus);
    fileService.FilesCorpus(req.params._Corpus)
        .then(function (fs) {
            res.send(fs);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}