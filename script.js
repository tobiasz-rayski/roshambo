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

  const optionsArr = Object.keys(options);

  let userSelect = prompt("Choose your weapon...");

  let cpuSelect = optionsArr[Math.floor(Math.random() * optionsArr.length)];
  console.log(cpuSelect);
}

roshamboGame();
