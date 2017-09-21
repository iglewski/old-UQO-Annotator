var _ = require('lodash');
var Q = require('q');
var fs = require('fs');
var path = require('path');
var service = {};

service.getCorpus = getCorpus;
service.FilesCorpus = FilesCorpus;
module.exports = service;
//this is function to get list of repertory
'use strict';
function getDir(dir, fileList){
    fileList = fileList || [];

    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
           fileList.push(name);
        } else {
            fileList.push(name);
        }
    }
    return fileList;
}
//this is service to get list a Corpus
function getCorpus() {
    var deferred = Q.defer();
    deferred.resolve(getDir('data'));
    return deferred.promise;
}
//this is service to get list files a Corpus
function FilesCorpus(_Corpus) {
    console.log("GET"+_Corpus);//test if the file is send on server
    var deferred = Q.defer();
    deferred.resolve(getDir('data/'+_Corpus));
    return deferred.promise;
}