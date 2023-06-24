import "./style.css";
import { FOLDERS } from "./data.js";
import { createDOM } from "./create-dom.js";
import themeModeToggle from "./theme-toggle.js";

const themeToggle = document.querySelector(".theme-toggle");
const headerDate = document.querySelector(".header-date");
const taskAmount = document.querySelector(".task-amount");
export const folderList = document.querySelector(".folder-collapse-container");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

themeToggle.addEventListener("click", themeModeToggle);

let dateNow = new Date();
let day = dateNow.getDate();
let month = dateNow.toLocaleString("default", { month: "long" });
let year = dateNow.getFullYear();

headerDate.textContent = `${day} ${month} ${year}`;

let totalTasks;
export function taskCounter() {
  let count = 0;
  FOLDERS.names.forEach((folder) => {
    folder.tasks.forEach((task) => {
      if (task) {
        count++;
      }
    });
  });
  totalTasks = count;
  taskAmount.textContent = totalTasks;
}

newFolderSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (newFolderInput.value === null || newFolderInput.value === "") {
    return;
  } else {
    FOLDERS.getStorage();
    FOLDERS.createObject(newFolderInput.value);
    FOLDERS.saveObject();
    render();
    newFolderInput.value = null;
  }
});

export function render() {
  clearList(folderList);
  createDOM.createFolderElement();
  createDOM.createTaskElement();
}

export function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

createDOM.createFolderElement();
createDOM.createTaskElement();
taskCounter();
