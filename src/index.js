import _ from "lodash";
import "./style.css";

const folderList = document.querySelector(".folder-list");
const newFolderForm = document.querySelector("#new-folder-form");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

const LOCAL_STORAGE_FOLDERS_KEY = "task.folders";
const LOCAL_STORAGE_SELECTED_FOLDER_ID_KEY = "task.selectedFolderId";
let allFolders =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_FOLDERS_KEY)) || [];
let selectedFolderId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_FOLDER_ID_KEY
);

folderList.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedFolderId = e.target.dataset.listID;
    saveAndRender();
  }
});

newFolderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const folderName = newFolderInput.value;
  if (folderName == null || folderName === "") return;
  const folder = createFolder(folderName);
  newFolderInput.value = "";
  allFolders.push(folder);
  saveAndRender();
  console.log(allFolders);
});

function createFolder(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_FOLDERS_KEY, JSON.stringify(allFolders));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_FOLDER_ID_KEY, selectedFolderId);
}

function render() {
  clearElement(folderList);
  allFolders.forEach((folder) => {
    const listElement = document.createElement("li");
    listElement.classList.add("folder");
    listElement.dataset.listID = folder.id;
    listElement.textContent = folder.name;
    if (folder.id === selectedFolderId) {
      listElement.classList.add("active-folder");
    }
    folderList.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
