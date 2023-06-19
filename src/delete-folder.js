import { FOLDERS } from "./data.js";
import { render } from "./index.js";

export default function deleteFolderElement() {
  const ID = this.parentElement.dataset.folderID;
  FOLDERS.getStorage();
  const filtered = FOLDERS.names.filter((folder) => folder.id !== +ID);
  console.log(filtered);
  FOLDERS.storage.setItem(FOLDERS.key, JSON.stringify(filtered));
  render();
}
