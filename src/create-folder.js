import deleteFolderElement from "./delete-folder.js";
import { folderList } from "./index.js";

export default function createFolderElement() {
  const myFolders = JSON.parse(localStorage.getItem("localStoreFolders"));
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
