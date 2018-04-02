"use strict";

let mainNav = `
            <ul id="topNav" class="nav flex-column">
                <li class="nav-item">
                    <a id="back" class="nav-link" href="#">Back</a>
                </li>
                <li class="nav-item">
                    <a id="profile" class="nav-link" href="#">Your Profile</a>
                </li>
            </ul>
            <ul id="menu" class="nav flex-column">
            </ul>
            <ul id="toggleSignIn" class="nav flex-column">
                <li id="signIn" class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                </li>
                <li id="signOut" class="nav-item" hidden="hidden">
                    <a  class="nav-link" href="#">Sign Out</a>
                </li>
            </ul>`;


//// Submenus Object

let submenus = {
    "firstNav" : `
                <li class="nav-item">
                    <a id="scheduleNav" class="nav-link active" href="#">Schedule</a>
                </li>
                <li class="nav-item">
                    <a id="registrationNav" class="nav-link" href="#">Registration</a>
                </li>
                <li class="nav-item">
                    <a id="talentNav" class="nav-link" href="#">Talent</a>
                </li>
                <li class="nav-item">
                    <a id="classesNav" class="nav-link" href="#">Classes</a>
                </li>
                <li class="nav-item">
                    <a id="competitionsNav" class="nav-link" href="#">Competitions</a>
                </li>
                <li class="nav-item">
                    <a id="policiesNav" class="nav-link" href="#">Policies</a>
                </li>
                <li class="nav-item">
                    <a id="contactNav" class="nav-link" href="#">Contact</a>
                </li>`,
    "scheduleNav": `
                <li class="nav-item">
                    <a class="nav-link active" href="#">Class Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Weekend Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Venues</a>
                </li>`,

    "registrationNav" : `            
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Class Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Weekend Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Venues</a>
                </li>
                <li id="signIn" class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                </li>
                <li id="signOut" class="nav-item" hidden="hidden">
                    <a  class="nav-link" href="#">Sign Out</a>
                </li>
            </ul>`,

    "talentNav": ``,

    "classesNav": ``,

    "competitionsNav" : ``,

    "policiesNav" : ``,

    "contactNav" : ``
};


module.exports = {mainNav, submenus};