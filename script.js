function roshamboGame() {
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

  let playerScore = 0;
  let cpuScore = 0;

  const optionsArr = Object.keys(options);

  let playerSelect = "paper";
  let cpuSelect = optionsArr[Math.floor(Math.random() * optionsArr.length)];

  if (cpuSelect == options[playerSelect].wins) {
    playerScore++;
  } else if (cpuSelect == options[playerSelect].loses) {
    cpuScore++;
  }
}

roshamboGame();
