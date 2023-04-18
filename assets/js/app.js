function openSubject(evt, subjectName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(subjectName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

/** get the element with id="defaultOpen" and click on it
 * @returns {void} defaultOpen is clicked
 */
function defaultFunction() {
    document.getElementById("defaultOpen").click();
}

/**
 * Toggles the 'responsive' class on the 'myTopnav' element to create
 * a responsive navigation bar when the burger menu icon is clicked.
 * The 'responsive' class is added when the element has the class 'topnav',
 * and the class is removed when the element has the class 'topnav responsive'.
 * @returns {void} the 'responsive' class is toggled on the 'myTopnav' element
 */

function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * Adds event listeners and calls functions after the DOM has fully loaded.
 * Specifically, it adds a click event listener to the 'burger-menu-icon' element
 * to call the 'navFunction' when clicked and calls the 'defaultFunction'
 * to initialize the default state of the page.
 */
document.addEventListener('DOMContentLoaded', function () {
  // Add click event listener to the burger menu icon to toggle the navigation bar responsiveness
  document.getElementById("burger-menu-icon").addEventListener("click", navFunction);

  // Call the defaultFunction to set the initial state of the page
  defaultFunction();
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction);