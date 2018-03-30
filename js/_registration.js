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

    grabEachObj(ticketClasses);
});

let grabEachObj = (arrayOfObjects) => {
    console.log('arrayOfObject function:', arrayOfObjects);
    for(let i = 0; i < arrayOfObjects.length; i++) {
        let eachObject = arrayOfObjects[i];
        console.log('eachObject', eachObject);
        grabDetails(eachObject);
    }
    console.log('arrayOfObjects after:', arrayOfObjects);
    return arrayOfObjects;
};

let grabDetails = (object) => {
    console.log("object is", object);
    // let newTicketObj = {};
    for (let prop in object) { //for each property in the object
        if (object[prop] == null || object[prop] == undefined) { // if the property is null or undefined
            // console.log("obj inside if statement", object);
            // console.log("prop inside if statement", object[prop]);
            delete object[prop]; // delete the property and its null/undefined value
        }
    }
    console.log("object after:", object);
    return object;
};