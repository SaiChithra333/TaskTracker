function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span>
    <button onclick="completeTask(this)">Complete</button><button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = "";
}

function completeTask(button) {
    var taskText = button.parentNode.querySelector("span");
    taskText.classList.toggle("completed");
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
