"use strict";

let firebase = require("./_firebase-config"),
    fbInteraction = require("./_firebase-interaction"),
    menuFunc = require("./_menu");

let currentUser = {
    uid: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    street: null,
    city: null,
    state: null,
    zipcode: null,
    country: null,
    community: null,
    fbID: null
};

//listen for changed state
firebase.auth().onAuthStateChanged((user) => {
        console.log("onAuthStateChanged", user);
        if (user) { // if a user is signed in
            currentUser.uid = user.uid;
            // menuFunc.hideShowMultElement('#signIn', '#signOut');
        } else {
            currentUser.uid = null;
        }
});             

let makeNewUser = (uid, fbID) => {
    let userObj = {
        uid: uid,
        fbid: fbID,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        streetAddress: null,
        city: null,
        state: null,
        zipcode: null,
        country: null,
        community: null,
    };
    return userObj;
};

let setUserVars = (obj) => {
    console.log('user.setUserVars: obj', obj);
    return new Promise((resolve, reject) => {
        currentUser.firstName = obj.firstName ? obj.firstName : currentUser.firstName;
        currentUser.lastName = obj.lastName ? obj.lastName : currentUser.lastName;
        currentUser.email = obj.email ? obj.email : currentUser.email;
        currentUser.password = obj.password ? obj.password : currentUser.password;
        currentUser.street = obj.street ? obj.street : currentUser.street;
        currentUser.city = obj.city ? obj.city : currentUser.city;
        currentUser.state = obj.state ? obj.state : currentUser.state;
        currentUser.zipcode = obj.zipcode ? obj.zipcode : currentUser.zipcode;
        currentUser.country = obj.country ? obj.country : currentUser.country;
        currentUser.community = obj.community ? obj.community : currentUser.community;
        currentUser.fbID = obj.fbID ? obj.fbID : currentUser.fbID;
        console.log('setUserVars updated currentUser', currentUser);
        resolve(currentUser);
    });
};


let checkForUser = (uid) => {
    fbInteraction.getFBdetails(uid)
    .then((result) => {
        let data = Object.values(result);
        if (data.length === 0) {
            fbInteraction.addUserFB(makeNewUser(uid)) //making new user in firebase
            .then((result) => {
                document.location.replace('edit-profile.html');
            });
        } else {
            setUserVars(data[0])
            .then((resolve) => {
                if ( storageAvailable('localStorage') ) {
                    storeUserLocally(currentUser);
                } else {
                    console.log('Local Storage is not available.');
                }
                
            });
            menuFunc.hideShowMultElement('#signIn', '#signOut');
        }
    });
};

let setUser = (val) => {
    currentUser.uid = val;
};

let getUser = () => {
    return currentUser.uid;
};

let getUserObj = () => {
    return currentUser;
};

// Get Values from Form

let buildNewUser = (userObj) => {
    console.log("build new user intialized");
    return new Promise((resolve, reject) => {
        let newUserObj = {
            uid: userObj.uid,
            fbID: userObj.fbid,
            firstName : $("#firstName").val(),
            lastName : $("#lastName").val(),
            email : $("#email").val(),
            street : $("#streetAddress").val(),
            city : $("#city").val(),
            state : $("#state").val(),
            zipcode :  $("#zipcode").val(),
            country :  $("#country").val(),
            community :  $("#community").val(),
        };
        console.log('newUserObj =', newUserObj);
        resolve(newUserObj);
    });
};

// Fill Form with Existing Values

let fillProfileForm = (userobj) => {
    console.log("filling form with exiting user:", userobj);
};

// Local Storage of User

let storageAvailable = (type) => {
    var storage = window[type],
    x = '__storage_test__';
    try {
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
};

let storeUserLocally = (userObj) => {
    console.log('Storing currentUser locally', userObj);
    for (let prop in userObj) {
        localStorage.setItem( "CU" + prop, userObj[prop] );
    }
};

let getUserLocally = () => {
    return new Promise((resolve) => {
    console.log('the current user obj:', currentUser);
        for (let prop in currentUser) {
            currentUser[prop] = localStorage.getItem("CU" + prop);
        }
    console.log('the updated currentUser obj:', currentUser);
    resolve(currentUser);
    });
};

let clearUserLocally = () => {
    for (let prop in currentUser) {
        localStorage.removeItem("CU" + prop);
    }
};

module.exports = { fillProfileForm, checkForUser, getUser, getUserObj, buildNewUser, setUser, storeUserLocally, clearUserLocally, getUserLocally };