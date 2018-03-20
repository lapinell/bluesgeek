"use strict";

let firebase = require("./_firebase-config"),
    fbInteraction = require("./_firebase-interaction");

let currentUser = {
    uid: null,
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
    fbid: null
};

//listen for changed state
firebase.auth().onAuthStateChanged((user) => {
    console.log("onAuthStateChanged", user);
    if (user) {
        currentUser.uid = user.uid;
        console.log("current user:", currentUser);
    } else {
        console.log("user not logged in", currentUser);
    }
});

let makeNewUser = (uid) => {
    let userObj = {
        uid: uid,
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
        fbid: null
    };
    return userObj;
};

let setUserVars = (obj) => {
    console.log('user.setUserVars: obj', obj);
};
    
let createUserProfile = (uid) => {
    fbInteraction.addUserFB(makeNewUser(uid))
    .then((result) => {
        console.log('success:', result);
        let tmpUser = {
            uid: uid,
            fbid: result.name
        };
        console.log("tmpUser:", tmpUser);
        return tmpUser;
    })
    .then((tmpUser) => {
        return setUserVars(tmpUser);
    });
};

let checkForUser = (uid) => {
    fbInteraction.getFBdetails(uid)
    .then((result) => {
        let data = Object.value(result);
        console.log("result data:", data);
    });
};

module.exports = { checkForUser };