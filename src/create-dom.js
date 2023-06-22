import { render, folderList } from "./index.js";
import { FOLDERS, TASKS } from "./data.js";

export const createDOM = {
  content: document.createElement("div"),

  createFolderElement() {
    FOLDERS.getStorage();
    if (FOLDERS.names === null) {
      return;
    }
    FOLDERS.names.forEach((folder) => {
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

      const addTask = document.createElement("div");
      addTask.classList.add("add-task");
      addTask.addEventListener("click", createDOM.addTaskElement);

      const editFolder = document.createElement("div");
      editFolder.classList.add("edit-folder");
      editFolder.addEventListener("click", createDOM.editFolderElement);

      const deleteFolder = document.createElement("div");
      deleteFolder.classList.add("delete-folder");
      deleteFolder.addEventListener("click", FOLDERS.deleteObject);

      const grow = document.createElement("div");
      grow.classList.add("grow");

      // const content = document.createElement("div");
      this.content.classList.add("content");

      folderList.appendChild(newFolder);
      newFolder.appendChild(folderTitle);
      newFolder.appendChild(addTask);
      newFolder.appendChild(editFolder);
      newFolder.appendChild(deleteFolder);
      newFolder.insertAdjacentElement("afterend", grow);
      grow.appendChild(this.content);
    });
  },

  editFolderElement() {
    const ID = this.parentElement.dataset.folderID;

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
            folder.name = modalInput.value;
            FOLDERS.saveObject();
            render();
            modalDialog.close();
          }
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
  },

  addTaskElement() {
    FOLDERS.ID = this.parentElement.dataset.folderID;
    FOLDERS.saveID();

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
    taskSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      let taskName = taskNameInput.value;
      let taskDesc = taskDescInput.value;
      let taskDate = taskDateInput.value;
      TASKS.createObject(taskName, taskDesc, taskDate);
      FOLDERS.saveObject();
      createDOM.createTaskElement();
      modalDialog.close();
    });

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
  },

  createTaskElement() {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }

    FOLDERS.getStorage();
    FOLDERS.names.forEach((folder) => {
      if (folder.tasks.length == 0) {
        const emptyNotice = document.createElement("p");
        emptyNotice.textContent =
          "There are no tasks in this folder yet, click the plus button to add your first.";
        this.content.appendChild(emptyNotice);
      } else {
        folder.tasks.forEach((task) => {
          const taskWrap = document.createElement("div");
          taskWrap.classList.add("task-wrap");
          taskWrap.dataset.taskID = task.id;

          const nameDescWrap = document.createElement("div");
          nameDescWrap.classList.add("name-desc-wrap");

          const taskName = document.createElement("h3");
          taskName.classList.add("task-name");
          taskName.textContent = task.name;

          const taskDesc = document.createElement("p");
          taskDesc.classList.add("task-desc");
          taskDesc.textContent = task.desc;

          const taskDate = document.createElement("p");
          taskDate.classList.add("task-date");
          taskDate.textContent = task.date;

          const taskEdit = document.createElement("div");
          taskEdit.classList.add("task-edit");

          const taskDelete = document.createElement("div");
          taskDelete.classList.add("task-delete");
          taskDelete.addEventListener("click", TASKS.deleteObject);

          nameDescWrap.append(taskName, taskDesc);
          taskWrap.append(nameDescWrap, taskDate, taskEdit, taskDelete);
          this.content.appendChild(taskWrap);
        });
      }
    });
  },
};
