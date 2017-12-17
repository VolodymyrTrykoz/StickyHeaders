'use strict';
let arrEl; //in this variable we are going to collect the number of headers on our page (for loop purposes) 
let arrElOffsets = []; // we will collect in this array the values of distance from window Top to each particular header
let active; // with this variable we will assign 'sticky' class for each required element


window.onload = function() { // after complete loading of our page this function will do next things
  arrEl = document.querySelectorAll('header');//firstly, we are collecting the number of all headers on our page in arrEl array
  for(let i = 0; i<arrEl.length; i++) { // secondly, using 'for' loop for having access to each particular header we need
  	arrElOffsets.push(arrEl[i].offsetTop); // we will add in arrElOffsets array values of top offsets for each particular header
  }
  stickyHeader(); // fire this function sharply after page loading
}



function stickyHeader() {
  window.onscroll = function() { // this function will be executed while we are scrolling our page
    if (window.scrollY < arrElOffsets[0]) { //if the value of Top window offset is less than value of our first header
      active = null; // we will reset the 'active' value from our [i] in arrEl array (if this [i] had 'active' value previously)
    } else {
      active = findSticky(); // otherwise the value of our 'active' [i] will be findSticky() function
    } 

    //for assigning 'sticky' class we will move through each header we have in our array and 
    //firstly - remove class 'sticky', and secondly - add 'sticky' class for those elements which
    // will have 'active' [i] property
    for(let i = 0; i<arrEl.length; i++) { // using 'for' loop approach we move through every element in the loop
      arrEl[i].classList.remove('sticky'); // and remove 'sticky' class if we have one
    }
    if (active == null) return; //we will reset the 'active' value from our [i]
                                // in arrEl array (if this [i] had 'active' value previously)
                                //but only if window top offset number is less than number of top offset for first header
    arrEl[active].classList.add('sticky'); // if the value of our [i] has got an 'active' status, we add 'sticky' class to this element
  }
}

//Look here to find out how we have got active status for our [i]
function findSticky() {
  for(let i = 0; i<arrEl.length; i++) { //using 'for' loop approach
    if ( window.scrollY  > arrElOffsets[i]){ // if the value of Top window offset is more than value of our nearest header
        active = i; // we assigning 'active' status for this nearest header   
    }
  }
  return active; // returning the value of this function for further usage
}








