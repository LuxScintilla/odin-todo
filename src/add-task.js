import { FOLDERS } from "./data.js";
import { render, folderList } from "./index.js";

export default function addTaskElement() {
  const ID = this.parentElement.dataset.folderID;

  const modalDialog = document.createElement("dialog");
  modalDialog.classList.add("task-modal");

  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("task-modal-title");
  modalTitle.textContent = "Create your new task";

  const taskForm = document.createElement("form");
  taskForm.classList.add("task-modal-form");
  taskForm.setAttribute("method", "dialog");

  const taskNameLabel = document.createElement("label");
  taskNameLabel.classList.add("task-label");
  taskNameLabel.textContent = "Task Title";
  taskNameLabel.setAttribute("for", "task-name");

  const taskNameInput = document.createElement("input");
  taskNameInput.classList.add("task-input");
  taskNameInput.setAttribute("type", "text");
  taskNameInput.setAttribute("name", "task-name");
  taskNameInput.setAttribute("autocomplete", "off");
  taskNameInput.setAttribute("required", "");

  const taskDescLabel = document.createElement("label");
  taskDescLabel.classList.add("task-label");
  taskDescLabel.textContent = "Description";
  taskDescLabel.setAttribute("for", "task-desc");

  const taskDescInput = document.createElement("textarea");
  taskDescInput.classList.add("task-textarea");
  taskDescInput.setAttribute("name", "task-desc");
  taskDescInput.setAttribute("autocomplete", "off");

  const taskDateLabel = document.createElement("label");
  taskDateLabel.classList.add("task-label");
  taskDateLabel.textContent = "Due Date";
  taskDateLabel.setAttribute("for", "task-date");

  const taskDateInput = document.createElement("input");
  taskDateInput.classList.add("task-input");
  taskDateInput.setAttribute("type", "date");
  taskDateInput.setAttribute("name", "task-date");
  taskDateInput.setAttribute("required", "");

  const buttonDIV = document.createElement("div");
  buttonDIV.classList.add("button-div");

  const taskSubmit = document.createElement("button");
  taskSubmit.classList.add("task-submit");
  taskSubmit.setAttribute("type", "button");
  taskSubmit.textContent = "Submit";

  const taskCancel = document.createElement("button");
  taskCancel.classList.add("task-cancel");
  taskCancel.setAttribute("type", "button");
  taskCancel.textContent = "Cancel";
  taskCancel.addEventListener("click", function () {
    modalDialog.close();
  });

  taskForm.append(
    taskNameLabel,
    taskNameInput,
    taskDescLabel,
    taskDescInput,
    taskDateLabel,
    taskDateInput
  );
  buttonDIV.append(taskSubmit, taskCancel);
  taskForm.appendChild(buttonDIV);
  modalDialog.append(modalTitle, taskForm);
  folderList.appendChild(modalDialog);

  modalDialog.showModal();
}
