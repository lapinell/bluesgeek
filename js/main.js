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
    console.log('menu button activated');
    menuFunc.hideElement('nav');
});

//// Sign In and Out Buttons
$('#signIn').click(function () {
    console.log('signIn clicked');
    fbInteraction.logInGoogle()
    .then( (result) => {
        console.log("result from login", result.user.uid);
        user.setUser(result.user.uid);
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
    let userToSave = user.getUserObj();
    fbInteraction.getFBdetails(userToSave.uid)
    .then((result) => {
        userToSave.fbid = Object.keys(result)[0]; //save firebase id to current user
        console.log("current user is updated?", userToSave);
        user.buildNewUser(userToSave)
        .then((userObj) => {
            console.log('whole new User object', userObj);
            fbInteraction.updateUserFB(userObj)
            .then( (result) => { 
                console.log('user updated?', result);
                document.location.replace('profile.html');
            });
        }); //get values from form and store in current user//update user in firebase
    });
    // redirect to profile page with newly added values
});

$('#editProfile').click(function() {
    console.log('edit profile button clicked');
    document.location.replace('edit-profile.html');
});

////Build profile page with currentUser

if( $('body').is('.profilePage')) {
    console.log('currentUser uid:', user.getUser());
}

console.log('end main.js');