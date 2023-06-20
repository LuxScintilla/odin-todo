import { FOLDERS } from "./data.js";
import { render, folderList } from "./index.js";

export default function editFolderElement() {
  const ID = this.parentElement.dataset.folderID;
  console.log(ID);

  const modalDialog = document.createElement("dialog");
  modalDialog.classList.add("modal");

  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = "Insert your new folder name";

  const modalForm = document.createElement("form");
  modalForm.classList.add("modal-form");
  modalForm.setAttribute("method", "dialog");

  const modalInput = document.createElement("input");
  modalInput.classList.add("modal-input");
  modalInput.setAttribute("type", "text");
  modalInput.setAttribute("name", "folder-edit");
  modalInput.setAttribute("autocomplete", "off");
  modalInput.setAttribute("required", "");

  const buttonDIV = document.createElement("div");
  buttonDIV.classList.add("button-div");

  const modalSubmit = document.createElement("button");
  modalSubmit.classList.add("modal-submit");
  modalSubmit.setAttribute("type", "button");
  modalSubmit.textContent = "Submit";
  modalSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    if (modalInput.value === null || modalInput.value === "") {
      return;
    } else {
      FOLDERS.getStorage();
      FOLDERS.names.forEach((folder) => {
        if (folder.id === +ID) {
          console.log(folder.id);
          console.log(+ID);
          console.log(folder.name);
          folder.name = modalInput.value;
          FOLDERS.saveObject();
          console.log(folder.name);
        }
        modalDialog.close();
        render();
        console.log(folder.name);
      });
    }
  });

  const modalCancel = document.createElement("button");
  modalCancel.classList.add("modal-cancel");
  modalCancel.setAttribute("type", "button");
  modalCancel.textContent = "Cancel";
  modalCancel.addEventListener("click", function () {
    modalDialog.close();
  });

  buttonDIV.append(modalSubmit, modalCancel);
  modalForm.append(modalInput, buttonDIV);
  modalDialog.append(modalTitle, modalForm);
  folderList.appendChild(modalDialog);

  modalDialog.showModal();
}
