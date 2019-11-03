// Your code goes here
//Changing backgrounds
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
console.log(links);
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
