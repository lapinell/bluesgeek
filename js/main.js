"use strict";

let callAPI = require("./_callAPIs");
let menuFunc = require("./_menu");

//Organizer IDs
const pinellID = "9863217585";
const shippID = "17088682251";

//API calls

let orgShipp = callAPI.GETorganizer(shippID);

callAPI.eventbriteCall(orgShipp);

let pinellEvents = callAPI.GETorganizerEvents(pinellID);

callAPI.eventbriteCall(pinellEvents);

// Menu Button
$('#btn_menu').click(function () {
    menuFunc.hideElement('nav');
});

$('#signIn').click(function () {
    menuFunc.hideShowMultElement('#signIn', '#signOut');
});

$('#signOut').click(function () {
    menuFunc.hideShowMultElement('#signOut', '#signIn');
});