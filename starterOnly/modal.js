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
const checkbox1 = document.getElementById("checkbox1");
const validationMessage = document.querySelectorAll(".bground")[1]
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
//show success validation message
function showValidation() {
  validationMessage.style.display="block"
}
//hide success validation message
function exitValidation() {
  validationMessage.style.display="none"
}
function resetForm() { // reset form field
  formData.forEach(field=>{
    if (field.getElementsByTagName("input")[0].type==="radio") // if type is radio reset to not checked
    {
      [...field.getElementsByTagName("input")].forEach(radio=>{radio.checked=false})
    }
    else if (field.getElementsByTagName("input")[0].type==="checkbox") // if type is checkbox reset the notifications to not checked
    {
      field.getElementsByTagName("input")[1].checked=false
    }
    else // Reset other inputs value to null
    {
      field.getElementsByTagName("input")[0].value=null
    }
  })
}
function validate() {
  //If conditions are not respected show error
  var status = true
  const locations = [location1,location2,location3,location4,location5,location6];
  if (!(firstName.value.length>=2)) // firstname must have a minimum length of 2
  {
    showError(0,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    status=false
  }
  else hideError(0)
  if (!(lastName.value.length>=2)) // lastName must have a minimum length of 2
  {
    showError(1,"Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    status=false
  }
  else hideError(1)
  if (!emailValidation(email.value)) // email must be valid
  {
    showError(2,"Veuillez entrer une adresse mail correcte")
    status=false
  }
  else hideError(2)
  if (!dateValidation(birthDate.value)) // birth date must be valid
  {
    showError(3,"Vous devez entrer une date de naissance valide")
    status=false
  }
  else hideError(3)
  if (!numberOnly(tournamentQuantity.value)) // tournamentquantity must be only number
  {
    showError(4,"Veuillez entrer uniquement des chiffres")
    status=false
  }
  else hideError(4)
  if(locations.every((e)=>!e.checked)) // we have to check an option
  {
    showError(5,"Vous devez choisir une option.")
    status=false
  }
  else hideError(5)
  if (!checkbox1.checked) // we must agree with terms and conditions
  {
    showError(6,"Vous devez vérifier que vous acceptez les termes et conditions")
    status=false
  }
  else hideError(6)
  if (status)
  {
    exitModal()
    showValidation()
    setTimeout(exitValidation,3000)
    resetForm()
  }
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
function dateValidation(date) // validate the birthdate
{
  if (!date) return false // if date is empty return false
  const actualDate = new Date() // get actual date
  // if we are in the same year and same month but the day is in the future return false
  if (date.substr(0,4)==actualDate.getFullYear()&&date.substr(5,2)==actualDate.getMonth()+1&&date.substr(8,2)>actualDate.getDate())
  {
    return false
  }
  // if the year is in the future return false
  else if (date.substr(0,4)>actualDate.getFullYear())
  {
    return false
  }
  // if we are in the same year but the month is in the future return false
  else if (date.substr(0,4)==actualDate.getFullYear()&&date.substr(5,2)>actualDate.getMonth()+1)
  {
    return false
  }
  else return true
}
function showError(i,error) // Set html attribute to show error
{
  formData[i].setAttribute("data-error",error)
  formData[i].setAttribute("data-error-visible",true)
}
function hideError(i) // Set html attribute to hide error
{
  formData[i].setAttribute("data-error-visible",false)
}
