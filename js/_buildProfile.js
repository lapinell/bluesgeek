"use strict";


// Build Profile Form

let userProfileForm = (userObj) => {
    return new Promise((resolve, reject) => {
        let userItem = {
            firstName : userObj ? userObj.firstName : "",
            lastName : userObj ? userObj.lastName : "",
            email : userObj ? userObj.email : "",
            street : userObj ? userObj.streetAddress : "",
            city : userObj ? userObj.city : "",
            state : userObj ? userObj.state : "",
            zipcode : userObj ? userObj.zipcode : "",
            country : userObj ? userObj.country : "",
            community : userObj ? userObj.community : ""
        };
        let form =
        `<div class="row">
        <div class="col">
            <h2>Your BluesGeek Profile</h2>
            <p>Please make sure to fill in all the required fields. These are required for registering for any BluesGeek events.</p>
        </div>
        <div class="col-3">
            <button>Save</button>
        </div> 
    </div>
    <form>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="First Name" value="${userItem.firstName}">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name" value="${userItem.lastName}">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email" value="${userItem.email}">
        </div>
        <div class="form-group">
            <label for="streetAddress">Street Address</label>
            <input type="text" class="form-control" id="streetAddress" placeholder="Street Address" value="${userItem.streetAddress}">
        </div>
        <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="City" value="${userItem.city}">
        </div>
        <div class="form-group">
            <label for="zipcode">Zip Code</label>
            <input type="number" class="form-control" id="zipcode" placeholder="00000" value="${userItem.zipcode}">
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <input type="text" class="form-control" id="country" placeholder="Country" value="${userItem.country}">
        </div>
        <div class="form-group">
            <label for="community">Community</label>
            <input type="text" class="form-control" id="community" placeholder="Community" value="${userItem.community}">
        </div>
    </form>    `;
        resolve(form);
    }); 
};



// Build Profile

    /* <section class="row">
    <div class="col">
        <h2 id="userName"></h2>
        <p id="userLocation"></p>
    </div>
</section>
<section class="row profile">
    <div id="basicInfo" class="card">
        <h3>Basic Information</h3>
        <p id="userEmail"><strong>Email:</strong></p>
        <p id="userAddress"><strong>Address:</strong></p>
        <p id="userCommunity"><strong>Primary Dance Community:</strong></p>
    </div>
    <div id="editInfo" class="card">
        <h3>Account Settings</h3>
        <button id="editUser">Edit Account</button>
        <button id="deleteUser">Delete Account</button>
        <button id="resetUserPassword">Change Password</button>
    </div>
</section> */


module.exports = {userProfileForm};