"use strict";

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

  // Initialize Firebase
  var config = {

  };
  
  firebase.initializeApp(config);

  firebase.getFBsettings = () => {
    return config;
  };

  module.exports = firebase;
