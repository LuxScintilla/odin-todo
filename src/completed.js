const mainWrapper = document.querySelector(".main-wrapper");

export default function loadCompletedPage() {
  mainWrapper.style.backgroundImage = "none";
  mainWrapper.style.backgroundColor = "white";
  createPage();
}

function createPage() {
  const completedTitle = document.createElement("h2");
  completedTitle.classList.add("tasks-title");
  completedTitle.textContent = "These are your completed Tasks";
  mainWrapper.appendChild(completedTitle);
}
