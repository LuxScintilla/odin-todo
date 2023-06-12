const mainWrapper = document.querySelector(".main-wrapper");

export default function loadNewPage() {
  mainWrapper.style.backgroundImage =
    "linear-gradient(to bottom, var(--dark-bg), var(--new-task-bg)";
  createPage();
}

const tasksArray = [];

function submitTask(e) {
  e.preventDefault();
  const newForm = document.querySelector(".new-form");
  const fd = new FormData(newForm);
  const obj = Object.fromEntries(fd);
  obj.delete = function () {
    console.log("delete function here");
  };
  tasksArray.push(obj);
  clearInput();
  console.log(tasksArray);
}

function clearInput() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => (input.value = ""));
  const textAreaInput = document.querySelector("textarea");
  textAreaInput.value = "";
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
  titleInput.setAttribute("autocomplete", "off");
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

  const submitButton = document.createElement("button");
  submitButton.classList.add("task-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit New Task";
  newForm.appendChild(submitButton);

  submitButton.addEventListener("click", submitTask);
}
