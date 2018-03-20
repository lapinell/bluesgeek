"use strict";

let callAPI = require("./_callAPIs");
let menuFunc = require("./_menu");
let fbInteraction = require("./_firebase-interaction");
let user = require("./_user");

//// Organizer IDs
const pinellID = "9863217585";
const shippID = "17088682251";

//// API calls

// let orgShipp = callAPI.GETorganizer(shippID);

// callAPI.eventbriteCall(orgShipp);

// let pinellEvents = callAPI.GETorganizerEvents(pinellID);

// callAPI.eventbriteCall(pinellEvents);

//// Menu Button
$('#btn_menu').click(function () {
    menuFunc.hideElement('nav');
});

//// Sign In and Out Buttons
$('#signIn').click(function () {
    console.log('signIn clicked');
    fbInteraction.logInGoogle()
    .then( (result) => {
    console.log("result from login", result.user.uid);
    menuFunc.hideShowMultElement('#signIn', '#signOut');
    user.checkForUser(result.user.uid);
    });
});

$('#signOut').click(function () {
    console.log('signOut clicked');
    fbInteraction.logOut();
    menuFunc.hideShowMultElement('#signOut', '#signIn');
});

console.log('end main.js');