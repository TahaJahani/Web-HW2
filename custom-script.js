function toggleDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function randomGradient() {
    let gradient = document.querySelector("#mask");

    let randomColor1 = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + 1 + ')';
    let randomColor2 = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + 0.7 + ')';
    gradient.style.background = "linear-gradient(90deg, " + randomColor1 + " 0%, " + randomColor2 + " 100%)";
}