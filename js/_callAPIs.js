"use strict";

// Authentication
const eventbriteAPIkey = "KD72TKWVWZCHLBA5VKDB";
const eventbriteAUTHurl = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${eventbriteAPIkey}`;

//GET url functions


let eventbriteCall = (urlPartial) => {
    return $.ajax({
        url: `https://www.eventbriteapi.com/v3/${urlPartial}?token=${eventbriteAPIkey}`
        });
};

let GETorganizer = (organizerID) => {
    return eventbriteCall(`organizers/${organizerID}/`)
    .then((organizer) => {
        console.log('GETorganizer', organizer);
        return organizer;
    });
};

let GETorganizerEvents = (organizerID) => {
    
    return eventbriteCall(`organizers/${organizerID}/events/`)
    .then((organizerEvents) => {
        console.log('GETorganizerEvents: ', organizerEvents);
        return organizerEvents;
    });
};

let GETeventDetails = (eventID) => {
    return eventbriteCall(`/events/${eventID}/ticket_classes/`)
    .then((eventDetailObject) => {
        console.log('GETeventDetails', eventDetailObject);
        return eventDetailObject;
    });
};


module.exports = {eventbriteCall, GETorganizer, GETorganizerEvents, GETeventDetails};