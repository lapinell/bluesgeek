"use strict";

let buildNav = require("./_buildNav"),
    user = require("./_user"),
    fbInteraction = require("./_firebase-interaction");

// Account Buttons

function hideElement (element) {
    if( $(element).attr('hidden') == "hidden" ){ //if navigation is hidden
        $(element).removeAttr('hidden');//show navigation
    } else { 
        $(element).attr('hidden', true);//else hide navigation
    }
}

function hideShowMultElement (element1, element2) {
    if( $(element2).attr('hidden') == "hidden" ){ //if element2 is hidden
        $(element2).removeAttr('hidden');//show element2
        $(element1).attr('hidden', true);//and hide element1
    } else { 
        $(element2).attr('hidden', true);//else hide element2
        $(element1).removeAttr('hidden');//and show element 1
    }
}

//// Build Nav

let buildMainNav = (htmlPartial) => {
    $('nav').html(buildNav.mainNav); // find nav and put mainNav html inside
    $('nav #menu').html(htmlPartial);
    activateEvents();
};

let updateNav = (nID) => {
    for (let prop in buildNav.submenus) {
        if (prop == nID) {
            buildMainNav(buildNav.submenus[prop]);
        }
    }   

};

let activateEvents = () => {
    $('#btn_menu').click(function () {
        hideElement('nav');
    });
    $('#menu li a').on("click", function() { //when a #menu list a item is clicked, fire the function to
        let navID = this.id; //store the id in the NavID variable
        console.log('activated', navID, 'item' );
        updateNav(navID);//update the #menu part of the nav with the html matching the NavID
    });
    $('#back').on("click", function(){
        console.log('activated back button');
        buildMainNav(buildNav.submenus.firstNav);
    });
    $('#profile').on("click", function(){
        console.log('activated profile button');
    });
    $('#signIn').on("click", function(){
        console.log('activated signin button');
        fbInteraction.logInGoogle()
        .then( (result) => {
            user.setUser(result.user.uid);
            hideShowMultElement('#signIn', '#signOut');
            user.checkForUser(result.user.uid);
        });
    });
    $('#signOut').on("click", function(){
        console.log('activated signout button');
        fbInteraction.logOut();
        hideShowMultElement('#signOut', '#signIn');
        user.clearUserLocally();
    });
};


// Active Nav

buildMainNav(buildNav.submenus.firstNav);

activateEvents();

module.exports = {hideElement, hideShowMultElement, buildMainNav, };