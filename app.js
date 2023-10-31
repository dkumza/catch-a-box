const gameBoard = document.querySelector(".game-board");
const box = document.querySelector(".box");

let interval;
let randX = 0;
let randY = 0;

let userPoints = 0;
function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
// get random X and Y values
const randXandY = () => {
   randX = rand(0, 320);
   randY = rand(0, 320);
};

// get random color for .box element
const randomColor = () => {
   let r = rand(0, 255);
   let g = rand(0, 255);
   let b = rand(0, 255);
   return `rgb(${r}, ${g}, ${b})`;
};

const randPositions = (i) => {
   setInterval(() => {
      randXandY();
      box.style.top = `${randY}px`;
      box.style.left = `${randX}px`;
      box.style.backgroundColor = randomColor();
   }, 1000);
};
randPositions();

box.addEventListener("click", () => {
   userPoints++;
   console.log(userPoints);
});
