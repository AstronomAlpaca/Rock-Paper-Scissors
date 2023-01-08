import "./styles/app.css";
import { initialiseGame } from "./modules/game-controller";
import { initialiseUI } from "./modules/DOM-controller";

const newGameBtn = document.querySelector("#newGameBtn");

newGameBtn.addEventListener("click", function () {
  initialiseGame();
  initialiseUI();
});
