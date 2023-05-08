function showUI() {}

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

const playButton = document.getElementById("play");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>
  button.addEventListener("mousedown", clickAnimation)
);
playButton.addEventListener("mouseup", disappear);
playButton.addEventListener("transitionend", showUI);
