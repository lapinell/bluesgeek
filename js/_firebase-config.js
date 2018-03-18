"use strict";

const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUPRfGGlr1N9Wq8rFfnlbxQiGPxwc9d3A",
    authDomain: "bluesgeek-9f913.firebaseapp.com",
    databaseURL: "https://bluesgeek-9f913.firebaseio.com",
    projectId: "bluesgeek-9f913",
    storageBucket: "bluesgeek-9f913.appspot.com",
    messagingSenderId: "483861606831"
  };
  
  firebase.initializeApp(config);