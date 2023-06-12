import _ from "lodash";
import "./style.css";
import loadTaskPage from "./tasks.js";
import loadTodayPage from "./today.js";
import loadCompletedPage from "./completed.js";
import loadNewPage from "./new-task";

const mainWrapper = document.querySelector(".main-wrapper");
const tasksButton = document.querySelector(".tasks-button");
const todayButton = document.querySelector(".today-button");
const completedButton = document.querySelector(".completed-button");
const newButton = document.querySelector(".new-button");

(function loadFirst() {
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
  loadTaskPage();
})();

tasksButton.addEventListener("click", function () {
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
  loadTaskPage();
});

todayButton.addEventListener("click", function () {
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
  loadTodayPage();
});

completedButton.addEventListener("click", function () {
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
  loadCompletedPage();
});

newButton.addEventListener("click", function () {
  while (mainWrapper.firstChild) {
    mainWrapper.removeChild(mainWrapper.firstChild);
  }
  loadNewPage();
});
