import { render, localStoreFolders } from "./index.js";

export default function deleteFolderElement() {
  const ID = this.parentElement.dataset.folderID;
  const folderArray = JSON.parse(localStorage.getItem(localStoreFolders));
  const folderFiltered = folderArray.filter((folder) => folder.id !== +ID);
  console.log(folderFiltered);
  localStorage.setItem(localStoreFolders, JSON.stringify(folderFiltered));
  render();
}
