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
const modalClose = document.querySelector(".close"); //Get the X element
//Get form elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournamentQuantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
modalClose.addEventListener("click",exitModal) // Add a click event listener on the X element which launch the exitModal function
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function exitModal() {
  modalbg.style.display = "none"; // Change the modalbg style on none
}
function validate() {

  if (firstName.value.length<2)
  {
    return false
  }
  if (lastName.value.length<2)
  {
    return false
  }
  if (!emailValidation(email.value))
  {
    return false
  }
  if (!numberOnly(tournamentQuantity.value))
  {
    return false
  }
  if(!location1.checked&&!location2.checked&&!location3.checked&&!location4.checked&&!location5.checked&&!location6.checked)
  {
    return false
  }
  if (!checkbox1.checked)
  {
    return false
  }
  return true
}
//regex validation for email
function emailValidation(value){
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
  return regex.test(value);
}
//regex validation for number
function numberOnly(value)
{
  const regex = /^-?\d+$/
  return regex.test(value)
}
