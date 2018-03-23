"use strict";

// Authentication
const eventbriteAPIkey = "KD72TKWVWZCHLBA5VKDB";
const eventbriteAUTHurl = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${eventbriteAPIkey}`;

//GET url functions
let GETorganizer = (organizerID) => {
    let organizerURL = `organizers/${organizerID}/`;
    return organizerURL;
};

let GETorganizerEvents = (organizerID) => {
    let organizerEventURL = `organizers/${organizerID}/events/`;
    return organizerEventURL;
};

let GETeventInfo = (eventID) => {
    let ticketClassURL = `/events/${eventID}/ticket_classes/`;
    return ticketClassURL;
};

let eventbriteCall = (urlPartial) => {
    $.ajax({
    url: `https://www.eventbriteapi.com/v3/${urlPartial}?token=${eventbriteAPIkey}`
    }).done( function( data ) {
        console.log('It worked:', data);
    });
};

module.exports = {eventbriteCall, GETorganizer, GETorganizerEvents, GETeventInfo};