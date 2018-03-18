"use strict";

const eventbriteAPIkey = "KD72TKWVWZCHLBA5VKDB";
const eventbriteAUTHurl = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${eventbriteAPIkey}`;

const eventbriteGETurl = (callback) => {
     let newURL = `https://www.eventbriteapi.com${callback}?token=${eventbriteAPIkey}`;
     return newURL;
};

//Organizer IDs
const lauraID = "9863217585";

//GET url functions
let GETevents = (id) => {
    let organizerID = id;
    let getURL = `/organizers/${organizerID}/events/`;
    return getURL;
};



let eventbriteCall = () => {
    $.ajax({
    url: eventbriteGETurl(GETevents(lauraID))
    }).done( function( events ) {
        console.log('It worked');
    });
};

module.exports = {eventbriteCall};