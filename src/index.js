import "./style.css";
import { FOLDERS } from "./data.js";
import createFolderElement from "./create-folder.js";

export const folderList = document.querySelector(".folder-collapse-container");
export const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

newFolderSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (newFolderInput.value === null || newFolderInput.value === "") {
    return;
  } else {
    FOLDERS.getStorage();
    FOLDERS.createObject();
    FOLDERS.saveObject();
    render();
    newFolderInput.value = null;
  }
});

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
