"use strict";

//// Module calls
let callAPI = require("./_callAPIs");
let menuFunc = require("./_menu");
let fbInteraction = require("./_firebase-interaction");
let user = require("./_user");
let userProfile = require("./_buildProfile"); 
let registration = require("./_registration");


//// Menu Button

$('#btn_menu').click(function () {
    menuFunc.hideElement('nav');
});

menuFunc.activateEvents();

//// Edit, Save, Delete Profile
$('.saveProfile').click(function() {
    console.log('saved profile button activated');
    let userToSave = user.getUserObj();
    fbInteraction.getFBdetails(userToSave.uid)
    .then((result) => {
        userToSave.fbid = Object.keys(result)[0]; //save firebase id to current user
        console.log("current user is updated?", userToSave);
        return user.buildNewUser(userToSave);
    })
    .then((userObj) => {
        console.log('whole new User object', userObj);
        return fbInteraction.updateUserFB(userObj);
    })
    .then( (result) => { 
        console.log('user updated?', result);
        user.storeUserLocally(result);
        document.location.replace('profile.html');
    });
});

$('#editUser').click(function() {
    console.log('edit profile button clicked');
    document.location.replace('edit-profile.html');
});

$('#deleteUser').click(function() {
    console.log('delete profile button clicked');
    let userToDelete = user.getUserObj();
    fbInteraction.getFBdetails(userToDelete.uid)
    .then((result) => {
        userToDelete.fbid = Object.keys(result)[0];
        console.log(userToDelete.fbid);
        return fbInteraction.deleteUser(userToDelete.fbid);
    })
    .then((data) => {
        console.log('user has been deleted?');
        fbInteraction.logOut();
        menuFunc.hideShowMultElement('#signOut', '#signIn');
        document.location.replace('index.html');
    });
});

////Prefill form when user exists

// When edit-profile.html loads && local user is stored
// then prefill form with current user values

if ( $('#editProfile').length > 0 && localStorage.getItem('CUuid') !== null)  {
    console.log('editing profile now');
    user.fillProfileForm("test");

}

////Build profile page with currentUser

if( $('.profilePage').length > 0) {
    console.log('build profile here');
    user.getUserLocally()
    .then((currentUser) => {
        userProfile.buildProfile(currentUser);
    }); 
}

///Build Registration Page with API Info

if( $('#registrationDetails').length > 0 ) {
    registration.printRegistrationDetails();
}