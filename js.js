'use strict';
let headersList; 
let headersOffset = []; 
let activeIndexElement; 

/********************************************************

 After loading my page I'm going to collect the number 
 of headers and values of Top 
 offsets for every particular header in the loop.


 After that we will execute a function which will search
 to what header we will apply 'sticky' class. 

********************************************************/

document.addEventListener('DOMContentLoaded', function() { 
  headersList = document.querySelectorAll('header');
  for(let i = 0; i<headersList.length; i++) { 
    headersOffset.push(headersList[i].offsetTop); 
    }
    stickyHeader();
});


/********************************************************

  This function will be executed while we are scrolling 
  our page. If Top offset value is less than the value of
  first header we will reset [activeIndexElement] and 
  consequently 'sticky' class  for this header.
  Simultaneously we will remove 'sticky' class for all
  headers which don't have [activeIndexElement] property
  and assign 'sticky' class for those headers which have 
  [activeIndexElement] property   

********************************************************/

function stickyHeader() {
  window.addEventListener('scroll', function stickyHeader(){ 
    if (window.scrollY < headersOffset[0]) { 
      activeIndexElement = null; 
    } else {
      activeIndexElement = findSticky(); 
    }    
    for(let i = 0; i<headersList.length; i++) { 
      headersList[i].classList.remove('sticky'); 
      if (activeIndexElement == null) return;                           
      headersList[activeIndexElement].classList.add('sticky'); 
    }
  })
} 

/************************************************************

  In this function I`m going to assign an activeIndexElement
  for those headers which top offset value has reached
  and exceeded window scrollY 0 value. It will give me the
  opportunity to bind css class for those headers and
  make them fixed to the top of window

*************************************************************/

function findSticky() {
  for(let i = 0; i<headersList.length; i++) { 
    if ( window.scrollY  > headersOffset[i]){ 
        activeIndexElement = i; 
    }
  }
  return activeIndexElement; 
}

