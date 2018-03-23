"use strict";

let eventbrite = require('./_callAPIs');

const bluesGeekID = "44304931242";
const pinellID = "9863217585";
const shippID = "17088682251";

let bluesGeekInfo = eventbrite.GETeventDetails(bluesGeekID);

let ticketClasses = event.ticket_classes;

if (let i = 0; i < ticketClasses.length; i++) { 
    let ticketObj = ticketClasses[i];   // Get each ticket class
    // if each prop is not null or undefined
    return buildTicketHTML(ticketObj);
};

let propertyDefined = (object) => {
    for (let prop in object) {
        if (prop != null || prop != undefined) {
            let eventDetail = prop;
            return eventDetail;
        };
    };
};


console.log(bluesGeekInfo);