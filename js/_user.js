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
        if (user) {
            currentUser.uid = user.uid;
            console.log("current user logged in:", currentUser);
            menuFunc.hideShowMultElement('#signIn', '#signOut');
        } else if (null) {
            currentUser.uid = null;
            console.log("user not logged in", currentUser);
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
        console.log('result', result);
        let data = Object.values(result);
        console.log("result data:", data.length);
        if (data.length === 0) {
            console.log('need to create user');
            console.log('creating profile for', uid);
            fbInteraction.addUserFB(makeNewUser(uid)) //making new user in firebase
            .then((result) => {
                console.log('new user added to firebase', result);
                document.location.replace('edit-profile.html');
            });
        } else {
            console.log('user exists', data);
            // let key = Object.keys(result);
            // data[0].fbID = key[0];
            setUserVars(data[0])
            .then((resolve) => {
                console.log('login resolve:', resolve);
            });
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

let storeUserLocally = (userObj) => {
    console.log('Stored Current User', userObj);
    // localStorage.setItem('currentUser', userObj);
};

let clearUserLocally = (userObj) => {
    console.log('cleared Current User:', userObj);
    // localStorage.removeItem("currentUser");
};


module.exports = { checkForUser, getUser, getUserObj, buildNewUser, setUser, storeUserLocally, clearUserLocally };