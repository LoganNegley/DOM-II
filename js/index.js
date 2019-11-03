// Your code goes here
//Changing backgrounds
const mainBackground = document.querySelector("body");
const navBackground = document.querySelector(".main-navigation");
const footerBackground = document.querySelector(".footer");

document.addEventListener("wheel", function() {
  mainBackground.style.backgroundColor = "#28fff4";
  navBackground.style.backgroundColor = "#60ff10";
  footerBackground.style.backgroundColor = "#fb10ff";
});

// Adding border to first image
const firstImg = document.querySelector(".intro img");

firstImg.addEventListener("click", function() {
  firstImg.style.border = "solid red 4px";
});

// Making logo bigger
const logo = document.querySelector(".container .logo-heading");

logo.addEventListener("mouseover", () => {
  logo.style.fontSize = "7rem";

  logo.addEventListener("mouseleave", () => {
    logo.style.fontSize = "3rem";
    logo.style.color = "black";
  });
});

// Links get bigger and change colors
// Links prevent Default
// Links go back to normal size and color
const links = document.querySelectorAll(".nav-link");
links.forEach(function(item) {
  item.addEventListener("mouseover", () => {
    item.style.fontSize = "4rem";
    item.style.color = "red";
  });

  item.addEventListener("mouseleave", () => {
    item.style.fontSize = "1.6rem";
    item.style.color = "black";
  });

  item.addEventListener("click", event => {
    event.preventDefault();
  });
});

//Make first paragraph bigger then back to normal
const turn = document.querySelector(".intro p");

turn.addEventListener("click", () => {
  turn.style.transform = "scale(1.5)";
});
turn.addEventListener("mouseleave", () => {
  turn.style.transform = "scale(1.0)";
});

//Each element of first card on the bottom changes different colors
// stopping propagation at div
const bottomSection = document.querySelector(".content-pick");
const bottomDiv = document.querySelector(".destination");
const bottomButton = document.querySelector(".destination div");

bottomSection.addEventListener("dblclick", () => {
  bottomSection.style.backgroundColor = "#ff12f7";
});

bottomDiv.addEventListener("dblclick", event => {
  bottomDiv.style.backgroundColor = "#ffee00";
  event.stopPropagation();
});

bottomButton.addEventListener("dblclick", () => {
  bottomButton.style.backgroundColor = "#ff8000";
});

//Enlarging all images on mouseover and back to narmal size on mouseleave
const biggerImg = document.querySelectorAll("img");

biggerImg.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.5)";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1.0)";
  });
});

//Changes date of footer on mouseover
const footerText = document.querySelector(".footer p");

footerText.addEventListener("mouseover", () => {
  footerText.textContent = new Date();
});

//Change color and size of Welcome to Fun Bus
const header = document.querySelector("h2");
console.log(header);
document.addEventListener("keypress", function(key) {
  if (key.keyCode === 13) {
    header.style.color = "red";
    header.style.fontSize = "7rem";
  } else {
    alert("Press enter to see change");
  }
});
