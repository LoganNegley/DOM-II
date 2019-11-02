// Your code goes here

const mainBackground = document.querySelector("body");
const navBackground = document.querySelector(".main-navigation");
const footerBackground = document.querySelector(".footer");

document.addEventListener("keypress", function(key) {
  if (key.keyCode === 13) {
    mainBackground.style.backgroundColor = "#28fff4";
    navBackground.style.backgroundColor = "#60ff10";
    footerBackground.style.backgroundColor = "#fb10ff";
  } else {
    alert("Press enter to change background color");
  }
});
