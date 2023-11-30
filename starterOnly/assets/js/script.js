const navIcon = document.querySelector(".main-navbar .icon");
const form = document.querySelector("form");
const formContent = document.querySelector("form .form-content");
const formValidate = document.querySelector("form .form-validate");
const firstNameInput = document.querySelector("form #first");
const lastNameInput = document.querySelector("form #last");
const emailInput = document.querySelector("form #email");
const birthdateInput = document.querySelector("form #birthdate");
const quantityInput = document.querySelector("form #quantity");
const locationsInput = document.querySelectorAll("form input[type='radio']");
const conditionsInput = document.querySelector("form #checkbox1");

const errorTextFirstName = document.querySelector(".error-form.firstname");
const errorTextLastName = document.querySelector(".error-form.lastname");
const errorTexEmail = document.querySelector(".error-form.email");
const errorTextBirthdate = document.querySelector(".error-form.birthdate");
const errorTextQuantity = document.querySelector(".error-form.quantity");
const errorTextLocations = document.querySelector(".error-form.locations");
const errorTextConditions = document.querySelector(".error-form.conditions");

// Open responsive nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    main.className += " responsive";
  } else {
    x.className = "topnav";
    main.className -= " responsive";
  }
}
navIcon.addEventListener("click", editNav);

const errorMessages = {
  name: "Veuillez mettre entre 2 et 18 caractères.",
  email: "Veuillez renseigner une adresse mail valide.",
  birthdate: "Vous devez avoir plus de 18 ans pour participer",
  quantity: "Veuillez mettre un nombre entre 0 et 99",
  locations: "Veuillez sélectionner une ville",
  conditions: `Vous devez accepter les conditions d'utilisation`,
};

const regex = {
  // name: /^[A-Z][A-ÿ]+([-\s][A-Z][A-ÿ]+)*$/,
  name: /^([A-ÿ]{3,18}([-\s][A-ÿ]{2,18})*)$/,
  email: /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z]\.[a-zA-Z]$/,
};

// Validate the form
function validate(e) {
  e.preventDefault();

  // Valeur des inputs
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const birthdateValue = birthdateInput.value;
  const quantityValue = quantityInput.value;

  let formIsValided = true;

  // Logique de validation pour le prénom
  if (!regex.name.test(firstNameValue)) {
    errorTextFirstName.classList.add("active");
    errorTextFirstName.innerHTML = errorMessages.name;
    formIsValided = false;
  } else {
    errorTextFirstName.classList.remove("active");
  }
  // Logique de validation pour le nom
  if (!regex.name.test(lastNameValue)) {
    errorTextLastName.classList.add("active");
    errorTextLastName.innerHTML = errorMessages.name;
    formIsValided = false;
  } else {
    errorTextLastName.classList.remove("active");
  }

  // Logique de validation pour l'email
  if (emailValue === "" || !regex.email.test(emailValue)) {
    errorTexEmail.classList.add("active");
    errorTexEmail.innerHTML = errorMessages.email;
    formIsValided = false;
  } else {
    errorTexEmail.classList.remove("active");
  }

  // Logique de validation pour la date
  const birthdate = new Date(birthdateValue);
  let todayDate = new Date();
  let age = todayDate.getFullYear() - birthdate.getFullYear();

  if (
    todayDate.getMonth() < birthdate.getMonth() ||
    (todayDate.getMonth() === birthdate.getMonth() &&
      todayDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  if (birthdateValue === "" || age < 18) {
    errorTextBirthdate.classList.add("active");
    errorTextBirthdate.innerHTML = errorMessages.birthdate;
    formIsValided = false;
  } else {
    errorTextBirthdate.classList.remove("active");
    console.log(age);
  }
  // Logique de validation pour la quantité
  if (quantityValue === "") {
    errorTextQuantity.classList.add("active");
    errorTextQuantity.innerHTML = errorMessages.quantity;
    formIsValided = false;
  } else {
    errorTextQuantity.classList.remove("active");
  }
  // Logique de validation pour les lieux
  let locationCheked = Array.from(locationsInput).some(
    (location) => location.checked
  );

  if (!locationCheked) {
    errorTextLocations.classList.add("active");
    errorTextLocations.innerHTML = errorMessages.locations;
    formIsValided = false;
  } else {
    errorTextLocations.classList.remove("active");
  }
  // Logique de validation pour les conditions
  if (!conditionsInput.checked) {
    errorTextConditions.classList.add("active");
    errorTextConditions.innerHTML = errorMessages.conditions;
    formIsValided = false;
  } else {
    errorTextConditions.classList.remove("active");
  }
  if (!formIsValided) {
    return;
  }
  formContent.classList.add("hidden");
  formValidate.classList.add("display");
}
form.addEventListener("submit", validate);

//reset the form
function resetForm() {
  if (formValidate.classList.contains("display")) {
    // formContent.classList.remove("hidden");
    // formValidate.classList.remove("display");
    location.reload();
  }
}
closeModalBtn.addEventListener("click", resetForm);
