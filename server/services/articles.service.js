var _ = require('lodash');
var Q = require('q');
var fs = require('fs');
var path = require('path');
var service = {};
var Ecore = require('ecore/dist/ecore.xmi');
var parse = require('xml-parser');
 
var inspect = require('util').inspect;
var parser = require('xml2json');
var Regex = require("regex");
var regex = new Regex("/^[a-zA-Z0-9]+$/");

service.uimaText = uimaText;

module.exports = service;
//---------
function readDoc(_fileTxt){
	var txt = fs.readFileSync('data/Corpus1/'+_fileTxt, 'utf8');// in process
	var data=txt.toString();
	console.log(data);
	return data;
}
//extract content from the XML file
function extraction_Data_Xmi(_file) {
/*
	var xml = fs.readFileSync(_file, 'utf8');

	// xml to json 
	var json = parser.toJson(xml);
	//console.log("to json -> %s", json);

	var jsonformat = JSON.parse(json);
	console.log(JSON.stringify(jsonformat));
	var content = JSON.stringify(jsonformat);
	return jsonformat;*/
}

//resolve content project uima
function uimaText(_project){
    var deferred = Q.defer();
    deferred.resolve(readDoc(_project));
    return deferred.promise;
} 