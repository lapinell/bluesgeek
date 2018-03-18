"use strict";

// Authentication
const eventbriteAPIkey = "KD72TKWVWZCHLBA5VKDB";
const eventbriteAUTHurl = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${eventbriteAPIkey}`;

//GET url functions
let GETorganizer = (id) => {
    let organizerID = id;
    let organizerURL = `organizers/${organizerID}/`;
    return organizerURL;
};

let GETorganizerEvents = (id) => {
    let organizerID = id;
    let organizerEventURL = `organizers/${organizerID}/events/`;
    return organizerEventURL;
};

let eventbriteCall = (urlPartial) => {
    $.ajax({
    url: `https://www.eventbriteapi.com/v3/${urlPartial}?token=${eventbriteAPIkey}`
    }).done( function( organizer ) {
        console.log('It worked:', organizer);
    });
};

module.exports = {eventbriteCall, GETorganizer, GETorganizerEvents};