"use strict";

// A module for building the profile page

let buildProfile = (userObj) => {
    let profileHTML =
    `<section class="row">
        <div class="col">
            <h2 id="userName">${userObj.firstName} ${userObj.lastName}</h2>
            <p id="userLocation">${userObj.city}, ${userObj.state}</p>
        </div>
    </section>
    <section class="row profile">
        <div id="basicInfo" class="card">
            <h3>Basic Information</h3>
            <p id="userEmail"><strong>Email:</strong> ${userObj.email}</p>
            <p id="userAddress"><strong>Address:</strong> ${userObj.streetAddress} ${userObj.city}, ${userObj.state} ${userObj.zipcode}</p>
            <p id="userCommunity"><strong>Primary Dance Community:</strong> ${userObj.community}</p>
        </div>
        <div id="editInfo" class="card">
            <h3>Account Settings</h3>
            <button id="editUser">Edit Account</button>
            <button id="deleteUser">Delete Account</button>
        </div>
    </section>`;
    $('#userProfile').html(profileHTML);
};


module.exports = { buildProfile };