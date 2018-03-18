"use strict";

let callAPI = require("./_callAPIs");

//Organizer IDs
const pinellID = "9863217585";
const shippID = "17088682251";

//API calls

let orgShipp = callAPI.GETorganizer(shippID);

callAPI.eventbriteCall(orgShipp);