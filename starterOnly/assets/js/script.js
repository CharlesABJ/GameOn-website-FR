const navIcon = document.querySelector(".main-navbar .icon");
const form = document.querySelector("form");

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

//Valiadte the form
function validate(e) {
  e.preventDefault();
  alert("yes");
}

form.addEventListener("submit", validate);
