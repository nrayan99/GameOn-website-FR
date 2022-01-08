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
    formData[0].setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    formData[0].setAttribute("data-error-visible",true)
  }
  else formData[0].setAttribute("data-error-visible",false)
  if (lastName.value.length<2)
  {
    formData[1].setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    formData[1].setAttribute("data-error-visible",true)
  }
  else formData[1].setAttribute("data-error-visible",false)
  if (!emailValidation(email.value))
  {
    formData[2].setAttribute("data-error","Veuillez entrer une adresse mail correcte")
    formData[2].setAttribute("data-error-visible",true)
  }
  else formData[2].setAttribute("data-error-visible",false)
  if (!birthDate.value)
  {
    formData[3].setAttribute("data-error","Vous devez entrer votre date de naissance.")
    formData[3].setAttribute("data-error-visible",true)
  }
  else formData[3].setAttribute("data-error-visible",false)
  if (!numberOnly(tournamentQuantity.value))
  {
    formData[4].setAttribute("data-error","Veuillez entrer uniquement des chiffres")
    formData[4].setAttribute("data-error-visible",true)
  }
  else formData[4].setAttribute("data-error-visible",false)
  if(!location1.checked&&!location2.checked&&!location3.checked&&!location4.checked&&!location5.checked&&!location6.checked)
  {
    formData[5].setAttribute("data-error","Vous devez choisir une option.")
    formData[5].setAttribute("data-error-visible",true)
  }
  else formData[5].setAttribute("data-error-visible",false)
  if (!checkbox1.checked)
  {
    formData[6].setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions")
    formData[6].setAttribute("data-error-visible",true)
  }
  else formData[6].setAttribute("data-error-visible",false)
  return false
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
