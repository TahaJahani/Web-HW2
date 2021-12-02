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
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}