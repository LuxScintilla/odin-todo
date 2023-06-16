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
    const newFolder = document.createElement("button");
    newFolder.classList.add("collapsible");
    newFolder.setAttribute("type", "button");
    newFolder.dataset.folderID = folder.id;
    newFolder.textContent = folder.name;
    newFolder.addEventListener("click", function () {
      this.classList.toggle("active");
      if (grow.clientHeight) {
        grow.style.height = 0;
      } else {
        grow.style.height = grow.scrollHeight + "px";
      }
    });

    const grow = document.createElement("div");
    grow.classList.add("grow");

    const content = document.createElement("div");
    content.classList.add("content");

    folderList.appendChild(newFolder);
    newFolder.insertAdjacentElement("afterend", grow);
    grow.appendChild(content);
  });
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

createFolderElement();
