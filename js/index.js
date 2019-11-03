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

const firstImg = document.querySelector(".intro img");

firstImg.addEventListener("click", function() {
  firstImg.style.border = "solid red 4px";
});

const logo = document.querySelector(".container .logo-heading");

logo.addEventListener("mouseover", () => {
  logo.style.fontSize = "7rem";
});

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
});
