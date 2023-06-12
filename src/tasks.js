import { something } from "./new-task.js";

const mainWrapper = document.querySelector(".main-wrapper");

export default function loadTaskPage() {
  mainWrapper.style.backgroundImage = "none";
  mainWrapper.style.backgroundColor = "white";
  createPage();
}

function createPage() {
  const tasksTitle = document.createElement("h2");
  tasksTitle.classList.add("tasks-title");
  tasksTitle.textContent = "All your open Tasks";
  mainWrapper.appendChild(tasksTitle);
}
