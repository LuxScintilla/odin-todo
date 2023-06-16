import "./style.css";

const folderList = document.querySelector(".folder-collapse-container");
const newFolderInput = document.querySelector(".new-folder-input");
const newFolderSubmit = document.querySelector(".new-folder-submit");

const localStoreFolders = "localStoreFolders";

const myFolders = JSON.parse(localStorage.getItem(localStoreFolders)) || [];

newFolderSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (newFolderInput.value === null || newFolderInput.value === "") {
    return;
  } else {
    createObject();
    saveStorage();
    createFolderElement();
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

function createFolderElement() {
  clearList(folderList);
  myFolders.forEach((folder) => {
    const newFolder = document.createElement("div");
    newFolder.classList.add("collapsible");
    newFolder.dataset.folderID = folder.id;
    newFolder.addEventListener("click", function () {
      this.classList.toggle("active");
      if (grow.clientHeight) {
        grow.style.height = 0;
      } else {
        grow.style.height = grow.scrollHeight + "px";
      }
    });

    const folderTitle = document.createElement("h2");
    folderTitle.classList.add("folder-title");
    folderTitle.textContent = folder.name;

    const editFolder = document.createElement("div");
    editFolder.classList.add("edit-folder");

    const deleteFolder = document.createElement("div");
    deleteFolder.classList.add("delete-folder");
    deleteFolder.addEventListener("click", deleteFolderElement);

    const grow = document.createElement("div");
    grow.classList.add("grow");

    const content = document.createElement("div");
    content.classList.add("content");

    folderList.appendChild(newFolder);
    newFolder.appendChild(folderTitle);
    newFolder.appendChild(editFolder);
    newFolder.appendChild(deleteFolder);
    newFolder.insertAdjacentElement("afterend", grow);
    grow.appendChild(content);
  });
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function deleteFolderElement() {
  const ID = this.parentElement.dataset.folderID;
  const folderArray = JSON.parse(localStorage.getItem(localStoreFolders));
  const folderFiltered = folderArray.filter((folder) => folder.id !== +ID);
  console.log(folderFiltered);
  localStorage.setItem(localStoreFolders, JSON.stringify(folderFiltered));
  createFolderElement();
}

createFolderElement();
