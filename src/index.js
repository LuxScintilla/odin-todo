import "./style.css";
import createFolderElement from "./create-folder.js";

export const folderList = document.querySelector(".folder-collapse-container");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

export const localStoreFolders = "localStoreFolders";

export const myFolders =
  JSON.parse(localStorage.getItem(localStoreFolders)) || [];

newFolderSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (newFolderInput.value === null || newFolderInput.value === "") {
    return;
  } else {
    createObject();
    saveStorage();
    render();
    newFolderInput.value = null;
  }
});

function createObject() {
  const folder = { id: Date.now(), name: newFolderInput.value, tasks: [] };
  myFolders.push(folder);
}

function saveStorage() {
  localStorage.setItem(localStoreFolders, JSON.stringify(myFolders));
}

export function render() {
  clearList(folderList);
  createFolderElement();
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

createFolderElement();
