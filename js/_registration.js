"use strict";

let eventbrite = require('./_callAPIs');

const bluesGeekID = "44304931242";
const pinellID = "9863217585";
const shippID = "17088682251";

eventbrite.GETeventDetails(bluesGeekID)
.then((eventDetails) => {
    console.log('these are the bluesGeek event details', eventDetails);
    console.log('ticket classes:', eventDetails.ticket_classes);
    let ticketClasses = eventDetails.ticket_classes;
    return grabEachObj(ticketClasses);
})
.then((tickets) => {
    // console.log('got the tickets array', tickets);
    printTickets(tickets);
});

let grabEachObj = (arrayOfObjects) => {
    // console.log('arrayOfObject function:', arrayOfObjects);
    for(let i = 0; i < arrayOfObjects.length; i++) {
        let eachObject = arrayOfObjects[i];
        // console.log('eachObject', eachObject);
        grabDetails(eachObject);
    }
    // console.log('arrayOfObjects after:', arrayOfObjects);
    return arrayOfObjects;
};

let grabDetails = (object) => {
    // console.log("object is", object);
    for (let prop in object) { //for each property in the object
        if (object[prop] == null || object[prop] == undefined) { // if the property is null or undefined
            delete object[prop]; // delete the property and its null/undefined value
        }
    }
    // console.log("object after:", object);
    return object;
};

let printTickets = (ticketArray) => {
    console.log('what are tickets?', ticketArray);
    
    for(let i = 0; i < ticketArray.length; i++) {
        let ticket = ticketArray[i];
        console.log('the ticket is:' , ticket);
        $('main').append(`
        <section>
            <h2>${ticket.name}</h2>
        </section>`);
    }
};