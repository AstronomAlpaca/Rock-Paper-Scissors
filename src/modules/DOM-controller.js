import { humanScore, cpuScore } from "./game-controller";

function initialiseUI() {
  toggleGameSection();
  createChoiceButtons();
  setScoreDisplay();
}

function toggleGameSection() {
  const activeGameSection = document.querySelector("#game-is-active");
  activeGameSection.classList.toggle("toggledVisibility");
}

function createChoiceButtons() {
  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  rockBtn.classList.add("choiceBtn");
  paperBtn.classList.add("choiceBtn");
  scissorsBtn.classList.add("choiceBtn");

  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scissors";

  const btnSection = document.querySelector("#buttons-section");

  btnSection.appendChild(rockBtn);
  btnSection.appendChild(paperBtn);
  btnSection.appendChild(scissorsBtn);

  const elementNodeList = document.querySelectorAll(".choiceBtn");
  const choices = Array.from(elementNodeList);

  choices.forEach((button) => {
    button.addEventListener("click", function (event) {
      console.log("clicked", event.target);
    });
  });
}

function setScoreDisplay() {
  const humanScoreDisplay = document.querySelector("#human-score-display");
  const cpuScoreDisplay = document.querySelector("#cpu-score-display");

  humanScoreDisplay.textContent = `You: ${humanScore}`;
  cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
}

export { initialiseUI };
