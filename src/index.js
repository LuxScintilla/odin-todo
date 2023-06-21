import "./style.css";
import { FOLDERS } from "./data.js";
import { createDOM } from "./create-dom.js";

export const folderList = document.querySelector(".folder-collapse-container");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

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
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

createDOM.createFolderElement();
