"use strict";

let navHTML = `
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Registration</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Talent</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Classes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Competitions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Policies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li id="signIn" class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                </li>
                <li id="signOut" class="nav-item" hidden="hidden">
                    <a  class="nav-link" href="#">Sign Out</a>
                </li>
            </ul>`;

let buildNav = () => {
    $('nav').html(navHTML);
};

buildNav();

module.exports = {buildNav};