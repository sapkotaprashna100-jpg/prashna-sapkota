function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
}

// Hamburger menu function
function hamburger() {
var menu = document.getElementById("menu-links");
var logo = document.getElementById("ffc-logo");
if (menu.style.display === "block" && logo.style.display === "none") {
menu.style.display = "none";
logo.style.display = "block";
} else {
menu.style.display = "block";
logo.style.display = "none";
}
}