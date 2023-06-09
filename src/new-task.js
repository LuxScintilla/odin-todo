const mainWrapper = document.querySelector(".main-wrapper");

export default function loadNewPage() {
  mainWrapper.style.backgroundImage =
    "linear-gradient(to bottom, var(--dark-bg), var(--new-task-bg)";
  createPage();
}

function createPage() {
  const newTaskTitle = document.createElement("h2");
  newTaskTitle.classList.add("new-task-title");
  newTaskTitle.textContent = "Add a new Task";
  mainWrapper.appendChild(newTaskTitle);

  const newTaskImg = document.createElement("div");
  newTaskImg.classList.add("new-task-img");
  mainWrapper.appendChild(newTaskImg);

  const newForm = document.createElement("form");
  newForm.classList.add("new-form");
  mainWrapper.appendChild(newForm);

  const titleLabel = document.createElement("label");
  titleLabel.classList.add("task-label");
  titleLabel.setAttribute("for", "task-name");
  titleLabel.textContent = "Title";
  newForm.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.classList.add("task-input");
  titleInput.setAttribute("name", "task-name");
  newForm.appendChild(titleInput);

  const infoLabel = document.createElement("label");
  infoLabel.classList.add("task-label");
  infoLabel.setAttribute("for", "task-info");
  infoLabel.textContent = "Information";
  newForm.appendChild(infoLabel);

  const infoInput = document.createElement("textarea");
  infoInput.classList.add("task-info");
  infoInput.setAttribute("name", "task-info");
  newForm.appendChild(infoInput);

  const dateLabel = document.createElement("label");
  dateLabel.classList.add("task-label");
  dateLabel.setAttribute("for", "task-date");
  dateLabel.textContent = "Date";
  newForm.appendChild(dateLabel);

  const dateInput = document.createElement("input");
  dateInput.classList.add("task-input");
  dateInput.setAttribute("name", "task-date");
  dateInput.setAttribute("type", "date");
  newForm.appendChild(dateInput);

  const taskSubmit = document.createElement("button");
  taskSubmit.classList.add("task-submit");
  taskSubmit.setAttribute("type", "submit");
  taskSubmit.textContent = "Submit New Task";
  newForm.appendChild(taskSubmit);
}
