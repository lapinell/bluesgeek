"use strict";

const eventbriteAPIkey = "KD72TKWVWZCHLBA5VKDB";
const eventbriteAUTHurl = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${eventbriteAPIkey}`;

const eventbriteGETurl = (geturl) => {
     let newURL = `https://www.eventbriteapi.com/v3/${geturl}?token=${eventbriteAPIkey}`;
     return newURL;
};

//Organizer IDs
const lauraID = "9863217585";

//GET url functions
let GETorganizer = (id) => {
    let organizerID = id;
    let getURL = `organizers/${organizerID}/`;
    return getURL;
};

let GETorganizerEvents = (id) => {
    let organizerID = id;
    let getURL = `organizers/${organizerID}/events/`;
    return getURL;
};

let eventbriteCall = () => {
    $.ajax({
    url: eventbriteGETurl(GETorganizerEvents(lauraID))
    }).done( function( organizer ) {
        console.log('It worked:', organizer);
    });
};

module.exports = {eventbriteCall};