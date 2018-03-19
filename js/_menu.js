"use strict";

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

module.exports = {hideElement, hideShowMultElement};