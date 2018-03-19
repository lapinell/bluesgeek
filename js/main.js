"use strict";

let callAPI = require("./_callAPIs");

//Organizer IDs
const pinellID = "9863217585";
const shippID = "17088682251";

//API calls

let orgShipp = callAPI.GETorganizer(shippID);

callAPI.eventbriteCall(orgShipp);

let pinellEvents = callAPI.GETorganizerEvents(pinellID);

callAPI.eventbriteCall(pinellEvents);

// Menu Button
$('#btn_menu').click(function() {
    if( $('nav').attr('hidden') == "hidden" ){ //if navigation is not showing
        $('nav').removeAttr('hidden');//show navigation
    } else { 
        $('nav').attr('hidden', true);//else hide navigation
    }
});