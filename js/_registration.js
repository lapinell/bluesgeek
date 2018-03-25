"use strict";

let eventbrite = require('./_callAPIs');

const bluesGeekID = "44304931242";
const pinellID = "9863217585";
const shippID = "17088682251";

let bluesGeekInfo = eventbrite.GETeventDetails(bluesGeekID);

// let ticketClasses = event.ticket_classes;

// if (let i = 0; i < ticketClasses.length; i++) {  //for the length of the ticketClasses array
//     let newTicketObj = grabDetails(ticketClasses[i]);   // Get each ticket class and get return each non-null property and store in a new object
//     return buildTicketHTML(newTicketObj); // build the ticket html with the new ticket object
// };

let grabDetails = (object) => {
    console.log("object is", object);
    // let newTicketObj = {};
    for (let prop in object) { //for each property in the object
        // console.log('inside for in loop', object);
        // console.log('prop inside for in loop', object[prop]);
        if (object[prop] == null || object[prop] == undefined) { // if the property is null or undefined
            console.log("obj inside if statement", object);
            console.log("prop inside if statement", object[prop]);
            delete object[prop]; // delete the property and its value to the newTicketObj
        //     console.log ("object is now", object); //return the newTicketObj
        //     let newObj = object;
        //     console.log(newObj);
        }
        console.log("object after:", object);
    }
    // return newTicketObj;
};

let fakeObj = {
    "red" : null,
    "blue" : "#0000ff",
    "green" : undefined,
    "yellow" : "ochre",
    "white" : "#fff",
    "purple" : null
};

grabDetails(fakeObj);


// console.log(bluesGeekInfo);