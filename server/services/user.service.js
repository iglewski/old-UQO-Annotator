var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('users');
var fs = require('fs');
var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.fileList = fileList;
module.exports = service;

function authenticate(username, password) {
  var deferred = Q.defer();

  db.users.findOne({ username: username }, function (err, user) {
    if (err) deferred.reject(err.name + ': ' + err.message);

    if (user && bcrypt.compareSync(password, user.hash)) {
      // authentication successful
      deferred.resolve({
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: jwt.sign({ sub: user._id }, config.secret)
      });
    } else {
      // authentication failed
      deferred.resolve();
    }
  });

  return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();
    deferred.resolve(getFiles('data'));
    return deferred.promise;
}

function getById(_id) {
  var deferred = Q.defer();

  db.users.findById(_id, function (err, user) {
    if (err) deferred.reject(err.name + ': ' + err.message);

    if (user) {
      // return user (without hashed password)
      deferred.resolve(_.omit(user, 'hash'));
    } else {
      // user not found
      deferred.resolve();
    }
  });

  return deferred.promise;
}

function create(userParam) {
  var deferred = Q.defer();

  // validation
  db.users.findOne(
    { username: userParam.username },
    function (err, user) {
      if (err) deferred.reject(err.name + ': ' + err.message);

      if (user) {
        // username already exists
        deferred.reject('Username "' + userParam.username + '" is already taken');
      } else {
        createUser();
      }
    });

  function createUser() {
    // set user object to userParam without the cleartext password
    var user = _.omit(userParam, 'password');

    // add hashed password to user object
    user.hash = bcrypt.hashSync(userParam.password, 10);

    db.users.insert(
      user,
      function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve();
      });
  }

  return deferred.promise;
}

function update(_id, userParam) {
  var deferred = Q.defer();

  // validation
  db.users.findById(_id, function (err, user) {
    if (err) deferred.reject(err.name + ': ' + err.message);

    if (user.username !== userParam.username) {
      // username has changed so check if the new username is already taken
      db.users.findOne(
        { username: userParam.username },
        function (err, user) {
          if (err) deferred.reject(err.name + ': ' + err.message);

          if (user) {
            // username already exists
            deferred.reject('Username "' + req.body.username + '" is already taken')
          } else {
            updateUser();
          }
        });
    } else {
      updateUser();
    }
  });

  function updateUser() {
    // fields to update
    var set = {
      firstName: userParam.firstName,
      lastName: userParam.lastName,
      username: userParam.username,
    };

    // update password if it was entered
    if (userParam.password) {
      set.hash = bcrypt.hashSync(userParam.password, 10);
    }

    db.users.update(
      { _id: mongo.helper.toObjectID(_id) },
      { $set: set },
      function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve();
      });
  }

  return deferred.promise;
}

function _delete(_id) {
  var deferred = Q.defer();

  db.users.remove(
    { _id: mongo.helper.toObjectID(_id) },
    function (err) {
      if (err) deferred.reject(err.name + ': ' + err.message);

      deferred.resolve();
    });

  return deferred.promise;
}
'use strict';
function fileList(dir){
    var deferred = Q.defer();
        fileList = fileList || [];
 
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        //if (fs.statSync(name).isDirectory()){
           fileList.push(name);
        //} else {
        //    fileList.push(name);
        //}
    }
    deferred.resolve(fileList);
    return deferred.promise;;
}
