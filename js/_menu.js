"use strict";

let buildNav = require("./_buildNav");

//// Build Nav

let buildMainNav = (htmlPartial) => {
    $('nav').html(buildNav.mainNav); // find nav and put mainNav html inside
    $('nav #menu').html(htmlPartial);
};

let updateNav = (nID) => {
    console.log('updating nav');
    for (let prop in buildNav.submenus) {
        if (prop == nID) {
            console.log('building nav partial');
            buildMainNav(buildNav.submenus[prop]);
        }
    }   
    activateEvents();
};

let activateEvents = () => {
    $('#back').on("click", function(){
        console.log('activated back button');
    });
    $('#profile').on("click", function(){
        console.log('activated back button');
    });
    $('signIn').on("click", function(){
        console.log('activated back button');
    });
    $('signOut').on("click", function(){
        console.log('activated back button');
    });
};

buildMainNav(buildNav.submenus.firstNav);

$('#menu li a').on("click", function() { //when a #menu list a item is clicked, fire the function to
    console.log('menu item clicked', this.id); // console log which menu item has been clicked by id
    let navID = this.id; //store the id in the NavID variable
    updateNav(navID);//update the #menu part of the nav with the html matching the NavID
});

$('#back').on("click", function() {
    console.log('back to main nav');
    buildMainNav(buildNav.submenus.firstNav);
});

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

module.exports = {hideElement, hideShowMultElement, buildMainNav, };