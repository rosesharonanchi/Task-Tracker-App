let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let input = document.querySelector("#my-input");
let textarea = document.querySelector("#text-area");
let date = document.querySelector("#date");
let displayError = document.querySelector(".error");
let tasks = document.querySelector(".tasks");
let refresh = document.querySelector("#refresh");

// form Validation
const formValidation = (e) => {
  e.preventDefault();
  successOrFailure();
};

form.addEventListener("submit", formValidation);

// success and failure
const successOrFailure = () => {
  if (input.value === "") {
    displayError.innerHTML = `This field cannot be empty <br>`;
    input.style.border = "solid 1px RGB(255, 114, 86)";
  } else {
    displayError.innerHTML = ``;
    input.style.border = "solid 1px RGB(229, 233, 240)";
    console.log("accepted");
    acceptData();
  }
};

// Accept and store the data
let data = {};
const acceptData = () => {
  data["title"] = input.value;
  data["description"] = textarea.value;
  data["date"] = date.value;
  createTask();
};

// create task

const createTask = () => {
  tasks.innerHTML += `<div class="task">
          <span class="fw-bold">${data.title}</span> 
          <p>${data.description}</p>
          <span class="text-secondary small">${data.date}</span>
          <span id="span">
           <i class="fa-solid fa-rotate-left" onclick = "unMarkAsComplete(this)" id="refresh"></i>
            <i class="fa-solid fa-check" onclick = "markAsComplete(this)" id="check"></i>
            <i class="fas fa-trash-alt" onclick = "deleteTask(this)" id="trash" ></i> </span>
      </div>`;
  resetForm();
};

// reset form
const resetForm = () => {
  input.value = "";
  textarea.value = "";
  date.value = "";
};
// Delete Task
const deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};
// update task
const markAsComplete = (e) => {
  e.parentElement.parentElement.style.borderLeft = "solid 4px RGB(64, 192, 87)";
  e.parentElement.previousElementSibling.classList.add("text-secondary");
  e.previousElementSibling.style.display = "block";
  e.style.display = "none";
};
const unMarkAsComplete = (e) => {
  e.parentElement.parentElement.style.borderLeft = "none";
  e.parentElement.previousElementSibling.classList.remove("text-secondary");
  // e.nextElementSibling.style.display = "block";
  
  e.style.display = 'none';
  e.nextElementSibling.style.display = "block";
};
