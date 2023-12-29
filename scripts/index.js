// Global variables
let lastKnownScrollPosition = 0; 
let ticking = false;
let dantes = document.querySelector("#dantes");

// Initial calls
updateTitleScale(lastKnownScrollPosition);

// Event listeners

// Throttling scroll event - captures scroll position, requests an animation frame and waits until it is complete before requesting another.
// window.addEventListener("scroll", () => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       updateTitleScale(lastKnownScrollPosition);
//       ticking = false;
//     }), {passive: true}
//   }
  
//   ticking = true;
// });

// window.addEventListener("scroll", () => {
//   lastKnownScrollPosition = window.scrollY;
//   console.log("A");

//   if (!ticking) {
//     console.log("B");
//     updateTitleScale(lastKnownScrollPosition);
//     ticking = false;
//   }
  
//   setTimeout(() => {
//     ticking = true;
//     console.log("C");
//   }, 500);
// });

setInterval(updateTitleScale, 50);

// Functions

// Updates scale of dantes and portfolio title elements
function updateTitleScale() {
  dantes.style.transform = `scale(${((window.scrollY * 0.001) ** 5 + 1).toFixed(2)})`;
  // console.log("HELLO");
  
//  let portfolio = document.querySelector("#portfolio");
//  portfolio.style.transform = `scale(${0.000003 * lastKnownScrollPosition * lastKnownScrollPosition - 1})`;
} 


/*
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {setUserName()};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}*/