window.onload = () => {
  containerItems.forEach((item) => item.classList.add("hidden"));
};

function clickAnimation(e) {
  this.classList.add("push");
  this.addEventListener("mouseup", () => {
    this.classList.remove("push");
  });
}

function disappear(e) {
  this.classList.add("disappear");
  this.addEventListener("transitionend", function removeObject(e) {
    if (e.propertyName !== "opacity") return;
    this.remove();
  });
}

function showUI(e) {
  if (e.propertyName !== "opacity") return;
  containerItems.forEach((item) => item.classList.remove("hidden"));
  containerItems.forEach((item) => item.classList.add("appear"));
}

const playButton = document.getElementById("play");
const buttons = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const containerItems = container.querySelectorAll("*:not(#play)");

buttons.forEach((button) =>
  button.addEventListener("mousedown", clickAnimation)
);
playButton.addEventListener("mouseup", disappear);
playButton.addEventListener("transitionend", showUI);

// GAME
const options = {
  rock: {
    wins: "scissors",
    loses: "paper",
  },
  paper: {
    wins: "rock",
    loses: "scissors",
  },
  scissors: {
    wins: "paper",
    loses: "rock",
  },
};

let playerScoreNum = document.getElementById("player-score");
let cpuScoreNum = document.getElementById("cpu-score");

let playerScore = 0;
let cpuScore = 0;

function playOne() {
  const optionsArr = Object.keys(options);
  let playerSelect = "paper";
  let cpuSelect = optionsArr[Math.floor(Math.random() * optionsArr.length)];

  if (cpuSelect == options[playerSelect].wins) {
    playerScore++;
  } else if (cpuSelect == options[playerSelect].loses) {
    cpuScore++;
  }
}

playerScoreNum.textContent = playerScore;
cpuScoreNum.textContent = cpuScore;
