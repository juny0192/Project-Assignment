const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

const savedTodos = JSON.parse(localStorage.getItem("toDoList")) || [];

for (let i = 0; i < savedTodos.length; i++) {
	let newToDo = document.createElement("li");
	newToDo.interText = savedTodos[i].task;
	newToDo.completed = savedTodos[i].completed ? true : false;
	if (newToDo.completed) {
		newToDo.style.textDecoration = "line-through";
	}
	toDoList.appendChild(newToDo);
}
form.addEventListener("submit", function (e) {
	e.preventDefault();

	if (document.getElementById("addToDo").value.length === 0) {
		alert("You need to write To Do");
		return;
	}

	let newToDo = document.createElement("li");
	let newToDoValue = document.getElementById("addToDo").value;
	newToDo.innerText = " " + newToDoValue + " ";
	newToDo.completed = false;

	form.reset();

	toDoList.appendChild(newToDo);

	savedTodos.push({ task: newToDoValue, completed: false });
	localStorage.setItem("toDoList", JSON.stringify(savedTodos));
});

toDoList.addEventListener("click", function (e) {
	if (!e.target.completed) {
		e.target.style.textDecoration = "line-through";
		e.target.style.color = "gray";
		e.target.completed = true;
	} else {
		e.target.style.textDecoration = "none";
		e.target.style.color = "black";
		e.target.completed = false;
	}
});
