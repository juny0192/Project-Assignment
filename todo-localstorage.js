const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < savedTodos.length; i++) {
	if (savedTodos[i].task === clickItem.innerText) {
		savedTodos[i].completed = clickItem.completed;
		localStorage.setItem("todos", JSON.stringify(savedTodos));
	}
}

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let newToDo = document.createElement("li");
	toDoList.appendChild(newToDo);

	let newToDoValue = document.getElementById("addToDo").value;
	newToDo.innerText = newToDoValue;
	newToDo.completed = false;

	let newCheckBox = document.createElement("input");
	newCheckBox.setAttribute("type", "checkbox");
	newToDo.appendChild(newCheckBox);

	form.reset();

	savedTodos.push({ task: newToDoValue, completed: false });
	localStorage.setItem("todos", JSON.stringify(savedTodos));
});

toDoList.addEventListener("click", function (e) {
	let clickItem = e.target;
	if (!clickItem.completed) {
		e.target.parentElement.classList.toggle("completed");
		clickItem.completed = true;
	} else {
		e.target.parentElement.classList.toggle("completed");
		clickItem.completed = false;
	}
});
