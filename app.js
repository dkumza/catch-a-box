const gameBoard = document.querySelector(".game-board");
const box = document.querySelector(".box");
const plPoints = document.querySelector(".play-points");
const computerPoints = document.querySelector(".pc-points");
const roundTime = document.querySelector(".time");
const roundNo = document.querySelector(".round");
const winner = document.querySelector(".winner");
const totalRounds = document.querySelector(".total-rounds");
const startGame = document.querySelector(".start-game");
const resetBtn = document.querySelector(".reset-game");

let interval;
let roundInterval;

let randX = 0;
let randY = 0;

let userPoints = 0;
let pcPoints = 1;
let rounds = 1;
let maxRounds = 2;
let maxTime = 10;
let time = 0;
// let timerOn = true;

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

totalRounds.textContent = ` of ${maxRounds} rounds`;
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

const roundTimer = () => {
   time = maxTime;

   roundInterval = setInterval(() => {
      if (time > 0) {
         roundTime.textContent = time--;
      } else if (time < 1) {
         roundTime.textContent = time--;
         clearInterval(interval);
         clearInterval(roundInterval);
         countWinner();
      }
   }, 1000);
};

const randPositions = () => {
   interval = setInterval(() => {
      box.classList.remove("hide");
      randXandY();
      box.style.top = `${randY}px`;
      box.style.left = `${randX}px`;
      box.style.backgroundColor = randomColor();
      computerPoints.textContent = pcPoints++;
   }, 1000);
};

box.addEventListener("click", () => {
   box.classList.add("hide");
   pcPoints--;
   plPoints.textContent = userPoints++;
});

const countWinner = () => {
   if (rounds < maxRounds) {
      rounds++;
      roundNo.textContent = rounds;
      randPositions();
      roundTimer();
   } else {
      if (userPoints > pcPoints) {
         winner.textContent = "is You!";
         resetBtn.classList.remove("hide");
         box.classList.add("hide");
      } else {
         winner.textContent = "is PC :(";
         resetBtn.classList.remove("hide");
      }
   }
};
const start = () => {
   randPositions();
   roundTimer();
   startGame.classList.add("hide");
};

const resetGame = () => {
   userPoints = 0;
   plPoints.textContent = userPoints;
   pcPoints = 0;
   computerPoints.textContent = pcPoints;
   rounds = 1;
   roundNo.textContent = rounds;
   maxRounds = 3;
   time = maxTime;
   winner.textContent = "";
   resetBtn.classList.add("hide");
   roundTimer();
   randPositions();
};
