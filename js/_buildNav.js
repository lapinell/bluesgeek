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
                    <a id="classScheduleNav" class="nav-link active" href="class-schedule.html">Class Schedule</a>
                </li>
                <li class="nav-item">
                    <a id="weekendScheduleNav" class="nav-link" href="weekend-schedule.html">Weekend Schedule</a>
                </li>
                <li class="nav-item">
                    <a id="venueNav" class="nav-link" href="venues.html">Venues</a>
                </li>
                <li class="nav-item">
                    <a id="mapNav" class="nav-link" href="venues.html">Map</a>
                </li>`,

    "registrationNav" : `            
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a id="regInfoNav" class="nav-link active" href="registration-info.html">Registration Information</a>
                </li>
                <li class="nav-item">
                    <a id="housingInfoNav" class="nav-link" href="#">Housing Information</a>
                </li>
                <li class="nav-item">
                    <a id="volInfoNav" class="nav-link" href="#">Volunteer Information</a>
                </li>
                <li class="nav-item">
                    <a id="swagInfoNav" class="nav-link" href="#">Swag Information</a>
                </li>  
                <li class="nav-item">
                    <a id="regFormNav" class="nav-link" href="#">Registration</a>
                </li>
            </ul>`,

    "talentNav": `<ul class="nav flex-column">
                    <li class="nav-item">
                        <a id="instructorsNav" class="nav-link" href="#">Instructors</a>
                    </li>
                    <li class="nav-item">
                        <a id="musiciansNav" class="nav-link active" href="musicians.html">Musicians</a>
                    </li>
                    <li class="nav-item">
                        <a id="djsNav" class="nav-link" href="#">DJs</a>
                    </li>
                    <li class="nav-item">
                        <a id="performancesNav" class="nav-link" href="#">Performances</a>
                    </li>  
                    <li class="nav-item">
                        <a id="regFormNav" class="nav-link" href="#">Registration</a>
                    </li>
                </ul>`,

    "classesNav": `<ul class="nav flex-column">
                        <li class="nav-item">
                            <a id="classDescNav" class="nav-link" href="#">Class Descriptions</a>
                        </li>
                        <li class="nav-item">
                            <a id="levelDescNav" class="nav-link" href="#">Level Placement Information</a>
                        </li>
                        <li class="nav-item">
                            <a id="trackDescNav" class="nav-link active" href="track-descriptions.html">Track Descriptions</a>
                        </li>
                    </ul>`,

    "competitionsNav" : `<ul class="nav flex-column">
                            <li class="nav-item">
                                <a id="proAmCompNav" class="nav-link" href="#">Pro Am Competition</a>
                            </li>
                            <li class="nav-item">
                                <a id="jackNJillCompNav" class="nav-link" href="#">Jack and Jill Competition</a>
                            </li>
                            <li class="nav-item">
                                <a id="soloCompNav" class="nav-link active" href="#">Solo Competition</a>
                            </li>
                        </ul>`,

    "policiesNav" : `<ul class="nav flex-column">
                        <li class="nav-item">
                            <a id="passTransferNav" class="nav-link" href="#">Pass Transfer Policy</a>
                        </li>
                        <li class="nav-item">
                            <a id="saferSpaceNav" class="nav-link" href="#">Safer Space Policy</a>
                        </li>
                    </ul>`,

    "contactNav" : ``
};


module.exports = {mainNav, submenus};