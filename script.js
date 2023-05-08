function buttonClick(e) {
  e.target.classList.add("push");
  e.target.addEventListener("mouseup", () => {
    e.target.classList.remove("push");
  });
}

const playButton = document.getElementById("play");

playButton.addEventListener("mousedown", buttonClick);
