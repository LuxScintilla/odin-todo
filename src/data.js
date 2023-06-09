import { render, taskCounter } from "./index.js";
import { createDOM } from "./create-dom.js";

export const FOLDERS = {
  names: [],
  ID: null,
  folderID: "localStoredID",
  key: "localStoredFolders",
  storage: window.localStorage,
  getStorage() {
    let data = FOLDERS.storage.getItem(FOLDERS.key);
    if (!data) {
      FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify([]));
    }
    FOLDERS.names = JSON.parse(data);
    return FOLDERS;
  },
  createObject(name) {
    const newFolderObj = {
      id: Date.now(),
      name: name,
      tasks: [],
    };
    FOLDERS.names.push(newFolderObj);
  },
  saveObject() {
    FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify(FOLDERS.names));
  },
  saveID() {
    FOLDERS.storage.setItem(FOLDERS.folderID, JSON.stringify(FOLDERS.ID));
  },
  getID() {
    let data = FOLDERS.storage.getItem(FOLDERS.folderID);
    FOLDERS.ID = JSON.parse(data);
    return FOLDERS;
  },
  deleteObject(e) {
    e.stopPropagation();
    const ID = this.parentElement.dataset.folderID;
    FOLDERS.getStorage();
    const filtered = FOLDERS.names.filter((folder) => folder.id !== +ID);
    FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify(filtered));
    render();
  },
};

export const TASKS = {
  names: [],
  ID: null,
  taskID: "localStoredTaskID",
  createObject(name, desc, date) {
    const newTaskObj = {
      id: Date.now(),
      name: name,
      desc: desc,
      date: date,
    };
    FOLDERS.getStorage();
    FOLDERS.getID();
    FOLDERS.names.forEach((folder) => {
      if (folder.id === +FOLDERS.ID) {
        folder.tasks.push(newTaskObj);
      }
    });
  },
  saveID() {
    FOLDERS.storage.setItem(TASKS.taskID, JSON.stringify(TASKS.ID));
  },
  getID() {
    let data = FOLDERS.storage.getItem(TASKS.taskID);
    TASKS.ID = JSON.parse(data);
    return TASKS;
  },
  deleteObject(e) {
    e.stopPropagation();
    const ID = this.parentElement.dataset.taskID;
    FOLDERS.getStorage();

    FOLDERS.names.forEach((folder) => {
      const filtered = folder.tasks.filter((task) => task.id !== +ID);
      folder.tasks = filtered;
    });
    FOLDERS.saveObject();
    render();
    createDOM.createTaskElement();
    taskCounter();
  },
};
