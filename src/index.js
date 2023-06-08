import "./style.css";
import loadNewPage from "./new-task";

const newButton = document.querySelector(".new-button");

newButton.addEventListener("click", loadNewPage);
