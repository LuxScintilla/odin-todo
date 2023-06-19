import { newFolderInput } from "./index.js";

export const FOLDERS = {
  names: [],
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
  createObject() {
    const newFolderObj = {
      id: Date.now(),
      name: newFolderInput.value,
      tasks: [],
    };
    FOLDERS.names.push(newFolderObj);
  },
  saveObject() {
    FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify(FOLDERS.names));
  },
  editObject() {},
};
