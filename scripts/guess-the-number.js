// Global variables
let lastKnownScrollPosition = 0; 
let isTitleRendered = true;
let dantes = document.getElementById("guess-the-number");
let numberDropdown = document.querySelector("#number-dropdown");

// Initial calls
updateTitleScale(lastKnownScrollPosition);
setInterval(updateTitleScale, 50);
addNumbers();

// Functions

// Updates scale of title elements
function updateTitleScale() {
  if (window.scrollY > 2500 && isTitleRendered) {
    dantes.style.display = "none";
    isTitleRendered = false;
    return;
  }
  if (window.scrollY < 2500 && !isTitleRendered) {
    dantes.style.display = "block";
    isTitleRendered = true;
  }
  dantes.style.transform = `scale(${((window.scrollY * 0.001) ** 5 + 1).toFixed(2)})`;
} 

// Add number options to dom
function addNumbers() {
  for(i = 2; i <= 100; i++) {
    let option = document.createElement("option");
    let node = document.createTextNode(i);
    option.appendChild(node)
    numberDropdown.appendChild(option);
  }
}