const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

const savedTodos = JSON.parse(localStorage.getItem("toDoList")) || [];

for (let i = 0; i < savedTodos.length; i++) {
	let newTodo = document.createElement("li");
	newTodo.innerText = savedTodos[i].task;
	newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
	if (newTodo.isCompleted) {
		newTodo.style.color = "gray";
		newTodo.style.textDecoration = "line-through";
	}
	toDoList.appendChild(newTodo);
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
		e.target.completed = true;
	} else {
		e.target.style.textDecoration = "";
		e.target.completed = false;
	}

	for (let i = 0; i < savedTodos.length; i++) {
		if (savedTodos[i].task === e.target.innerText) {
			savedTodos[i].completed = true;
		} else {
			savedTodos[i].completed = false;
		}
		localStorage.setItem("toDoList", JSON.stringify(savedTodos));
	}
});
