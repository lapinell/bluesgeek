"use strict";

//This module only gets and sets data in the firebase database.

let firebase = require('./_firebase-config'),
    provider = new firebase.auth.GoogleAuthProvider();  


let getFBdetails = (user) => {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`
    }).done((resolve) => {
        return resolve;
    }).fail((error) => {
        return error;
    });
};

let addUserFB = (userObj) => {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/users.json`,
        type:'POST',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((fbID) => {
        return fbID;
    });
};

let updateUserFB = (userObj) => {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/users/${userObj.fbID}.json`,
        type: 'PUT',
        data: JSON.stringify(userObj),
        dataType: 'json'
     }).done((userID) => {
        return userID;
     });
};

let createUser = (userObj) => {
   return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function (error) {
         let errorCode = error.code;
         let errorMessage = error.message;
         console.log("error:", errorCode, errorMessage);
      });
};

let loginUser = (userObj) => {
   return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function (error) {
         let errorCode = error.code;
         let errorMessage = error.message;
         console.log("error:", errorCode, errorMessage);
      });
};

let logInGoogle = () => {
    return firebase.auth().signInWithPopup(provider);
 };
 
 let logOut = () => {
    return firebase.auth().signOut();
 };

 module.exports = {
    getFBdetails,
    addUserFB,
    updateUserFB,
    createUser,
    loginUser,
    logInGoogle,
    logOut
};