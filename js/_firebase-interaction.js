"use strict";

//This module only gets and sets data in the firebase database.

let firebase = require('./_firebase-config'),
    provider = new firebase.auth.GoogleAuthProvide();


let getFBdetails = (user) => {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user.json?orderBy="uid"&equalTo="${user}"`
    }).done((resolve) => {
        return resolve;
    }).fail((error) => {
        return error;
    });
};