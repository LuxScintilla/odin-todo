import _ from "lodash";
import "./style.css";

const folderList = document.querySelector(".folder-list");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

const myFolders = [];

newFolderSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const folder = { id: Date.now(), name: newFolderInput.value, tasks: [] };
  myFolders.push(folder);
  createFolderElement();
  newFolderInput.value = "";
  console.log(myFolders);
});

function createFolderElement() {
  clearList(folderList);
  myFolders.forEach((folder) => {
    const newFolder = document.createElement("li");
    newFolder.classList.add("folder");
    newFolder.textContent = folder.name;
    folderList.appendChild(newFolder);
  });
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
