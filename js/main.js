"use strict";

let callAPI = require("./_callAPIs");
let menuFunc = require("./_menu");
let fbInteraction = require("./_firebase-interaction");
let user = require("./_user");
let userProfile = require("./_buildProfile"); 

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

//// Edit, Save, Delete Profile
$('.saveProfile').click(function() {
    console.log('saved profile button activated');
    user.buildNewUser()//get values from form and store in object
    .then((userObj) => {
        console.log('new user built', userObj);
        fbInteraction.updateUserFB(userObj);     //update firebase user with new values
    });
    //redirect to profile page with newly added values
});

$('#editProfile').click(function() {
    console.log('edit profile button clicked');
    document.location.replace('edit-profile.html');
});

console.log('end main.js');