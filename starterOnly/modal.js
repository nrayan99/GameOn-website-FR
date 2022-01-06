function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close") //Get the X element

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click",exitModal) // Add a click event listener on the X element which launch the exitModal function
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Exit modal form

function exitModal() {
  modalbg.style.display = "none"; // Change the modalbg style on none
}


