function toggleDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleCoverCardInGallery(coverCardID) {
  let element = document.getElementById(coverCardID);
  element.classList.toggle("clickable-pic-hover");
}

function randomGradient() {
  let gradient = document.querySelector("#mask");

  let randomColor1 = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + 1 + ')';
  let randomColor2 = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + 0.7 + ')';
  gradient.style.background = "linear-gradient(90deg, " + randomColor1 + " 0%, " + randomColor2 + " 100%)";
}

function showToast() {
  // Get the snackbar DIV
  var x = document.getElementById("toast");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function contactUsMouseMethod(e) {
  if (screen.width >= 600) {
    let whiteTexts = document.getElementsByClassName("text-contact-normal");
    let yellowText = document.getElementsByClassName("text-contact-yellow")[0];
    let margin = e.type == "mouseover" ? "10px" : "0px";
    let fontSize = e.type == "mouseover" ? "56px" : "50px";
    whiteTexts[0].style.transform = `translateY(-${margin})`;
    whiteTexts[1].style.transform = `translateY(${margin})`;
    yellowText.style.fontSize = fontSize;
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}