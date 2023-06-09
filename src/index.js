import _ from "lodash";
import "./style.css";
import loadNewPage from "./new-task";

const mainWrapper = document.querySelector(".main-wrapper");
const newButton = document.querySelector(".new-button");

newButton.addEventListener("click", function () {
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
  loadNewPage();
});
