"use strict";

let eventbrite = require('./_callAPIs');

const bluesGeekID = "44304931242";
const pinellID = "9863217585";
const shippID = "17088682251";

let bluesGeekInfo = eventbrite.GETeventDetails(bluesGeekID);

let grabEachObj = (arrayOfObjects) => {
    console.log('arrayOfObject function:', arrayOfObjects);
    for(let i = 0; i < arrayOfObjects.length; i++) {
    let eachObject = arrayOfObjects[i];
    console.log('eachObject', eachObject);
    grabDetails(eachObject);
    console.log('arrayOfObjects after:', arrayOfObjects);
    return arrayOfObjects;
    }
};

let grabDetails = (object) => {
    console.log("object is", object);
    // let newTicketObj = {};
    for (let prop in object) { //for each property in the object
        if (object[prop] == null || object[prop] == undefined) { // if the property is null or undefined
            console.log("obj inside if statement", object);
            console.log("prop inside if statement", object[prop]);
            delete object[prop]; // delete the property and its null/undefined value
        }
    }
    console.log("object after:", object);
    return object;
};

// let fakeObjArray = [
//     {
//         "red" : null,
//         "blue" : "#0000ff",
//         "green" : undefined,
//         "yellow" : "ochre",
//         "white" : "#fff",
//         "purple" : null
//     },
//     {
//         "cat" : true,
//         "dog" : 2,
//         "horse" : "one",
//         "snake" : null,
//         "hielo" : undefined,
//         "parrot" : "none",
//     },
//     {
//         "agriculture" : "BS",
//         "math" : null,
//         "html" : true,
//         "javascript" : "in progress"
//     }
// ];

// grabEachObj(bluesGeekInfo);

console.log(bluesGeekInfo);