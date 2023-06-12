const mainWrapper = document.querySelector(".main-wrapper");

export default function loadTodayPage() {
  mainWrapper.style.backgroundImage = "none";
  mainWrapper.style.backgroundColor = "white";
  createPage();
}

function createPage() {
  const todayTitle = document.createElement("h2");
  todayTitle.classList.add("tasks-title");
  todayTitle.textContent = "Your tasks for Today";
  mainWrapper.appendChild(todayTitle);
}
