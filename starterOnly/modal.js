// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close-modal");
const body = document.querySelector("body");
const main = document.querySelector("main");

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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.add("open");
  if (modalbg.classList.contains("open")) {
    body.classList.add("modal-open");
  }
}

// close modal form
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.classList.remove("open");
  body.classList.remove("modal-open");
}
