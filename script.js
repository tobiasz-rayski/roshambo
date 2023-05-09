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

const optionsArr = Object.keys(options);

function playRock() {
  let playerSelect = "rock";
  let cpuSelect = optionsArr[Math.floor(Math.random() * optionsArr.length)];
  cpuSelectUI(cpuSelect);
  gameLogic(cpuSelect, playerSelect);
}

function playPaper() {
  let playerSelect = "paper";
  let cpuSelect = optionsArr[Math.floor(Math.random() * optionsArr.length)];
  cpuSelectUI(cpuSelect);
  gameLogic(cpuSelect, playerSelect);
}

function playScissors() {
  let playerSelect = "scissors";
  let cpuSelect = optionsArr[Math.floor(Math.random() * optionsArr.length)];
  cpuSelectUI(cpuSelect);
  gameLogic(cpuSelect, playerSelect);
}

function cpuSelectUI(cpuSelect) {
  if (cpuSelect == "rock") {
    removeSelection();
    btnRockCPU.classList.add("push");
  } else if (cpuSelect == "paper") {
    removeSelection();
    btnPaperCPU.classList.add("push");
  } else {
    removeSelection();
    btnScissorsCPU.classList.add("push");
  }
}

function removeSelection() {
  btnRockCPU.classList.remove("push");
  btnPaperCPU.classList.remove("push");
  btnScissorsCPU.classList.remove("push");
}

function gameLogic(cpuSelect, playerSelect) {
  if (cpuSelect == options[playerSelect].wins) {
    playerScore++;
    playerScoreNum.textContent = playerScore;
    textDisplay.textContent = "Player scores!";
  } else if (cpuSelect == options[playerSelect].loses) {
    cpuScore++;
    cpuScoreNum.textContent = cpuScore;
    textDisplay.textContent = "CPU scores!";
  } else {
    textDisplay.textContent = "DRAW!";
  }

  announceWinner(cpuScore, playerScore);
}

function announceWinner(cpuScore, playerScore) {
  if (playerScore == 5) {
    containerItems.forEach((item) => {
      if (!item.classList.contains("on-top")) {
        item.classList.add("fade");
      }
    });
    containerOverlay.style.zIndex = 999;
    playAgainButton.classList.remove("hidden-a");
    textAnnouncePlayer.classList.remove("hidden-a");
  } else if (cpuScore == 5) {
    containerItems.forEach((item) => {
      if (!item.classList.contains("on-top")) {
        item.classList.add("fade");
      }
    });
    containerOverlay.style.zIndex = 999;
    textAnnounceCPU.classList.remove("hidden-a");
    playAgainButton.classList.remove("hidden-a");
  }
}

const btnRock = document.getElementById("rock-btn");
const btnPaper = document.getElementById("paper-btn");
const btnScissors = document.getElementById("scissors-btn");
const btnRockCPU = document.getElementById("rock-btn-cpu");
const btnPaperCPU = document.getElementById("paper-btn-cpu");
const btnScissorsCPU = document.getElementById("scissors-btn-cpu");
const textDisplay = document.querySelector(".log");
const textAnnouncePlayer = document.getElementById("announce-player");
const textAnnounceCPU = document.getElementById("announce-cpu");
const containerOverlay = document.getElementById("container-overlay");
const playAgainButton = document.getElementById("play-again-btn");

btnRock.addEventListener("click", playRock);
btnPaper.addEventListener("click", playPaper);
btnScissors.addEventListener("click", playScissors);
playAgainButton.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  containerItems.forEach((item) => item.classList.remove("fade"));
  containerItems.forEach((item) => item.classList.remove("push"));
  containerOverlay.style.zIndex = -1;
  textAnnouncePlayer.classList.add("hidden-a");
  textAnnounceCPU.classList.add("hidden-a");
  playAgainButton.classList.add("hidden-a");
  playerScoreNum.textContent = playerScore;
  cpuScoreNum.textContent = cpuScore;
}
