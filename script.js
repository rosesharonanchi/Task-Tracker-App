let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let input = document.querySelector("#my-input");
let textarea = document.querySelector("#text-area");
let date = document.querySelector("#date");
let displayError = document.querySelector(".error");
let tasks = document.querySelector(".tasks");

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
          <span class="fw-bold">${data.title}</span> <br>
          <p>${data.description}</p>
          <span class="text-secondary small">${data.date}</span>
          <span id="span">
           <i class="fa-solid fa-rotate-left"></i>
            <i class="fa-solid fa-check" onclick = "markAsComplete(this)"></i>
            <i class="fas fa-trash-alt" onclick = "deleteTask(this)" ></i> </span>
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
const markAsComplete = (e) =>{
 e.parentElement.parentElement.style.borderLeft = "solid 2px green"
}