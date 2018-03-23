"use strict";

// Authentication
const eventbriteAPIkey = "KD72TKWVWZCHLBA5VKDB";
const eventbriteAUTHurl = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${eventbriteAPIkey}`;

//GET url functions


let eventbriteCall = (urlPartial) => {
    $.ajax({
    url: `https://www.eventbriteapi.com/v3/${urlPartial}?token=${eventbriteAPIkey}`
    }).done( function( data ) {
        console.log('It worked:', data);
    });
};

let GETorganizer = (organizerID) => {
    let organizerURL = eventbrite.eventbriteCall(`organizers/${organizerID}/`);
    return organizerURL;
};

let GETorganizerEvents = (organizerID) => {
    let organizerEventURL = eventbrite.eventbriteCall(`organizers/${organizerID}/events/`);
    return organizerEventURL;
};

let GETeventDetails = (eventID) => {
    let eventDetailObject = eventbrite.eventbriteCall(`/events/${eventID}/ticket_classes/`);
    return eventDetailObject;
};


module.exports = {eventbriteCall, GETorganizer, GETorganizerEvents, GETeventInfo};