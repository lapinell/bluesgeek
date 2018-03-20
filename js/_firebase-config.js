"use strict";

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

let FBkeys = require('./_firebaseKey');

  // Initialize Firebase
  var config = {
    apiKey: FBkeys.getKey().apiKey ,
    authDomain: FBkeys.getKey().authDomain,
    databaseURL: FBkeys.getKey().databaseURL,
    projectId: FBkeys.getKey().projectId,
    storageBucket: FBkeys.getKey().storageBucket,
    messagingSenderId: FBkeys.getKey().messagingSenderId
  };
  
  firebase.initializeApp(config);

  firebase.getFBsettings = () => {
    return config;
  };

  module.exports = firebase;