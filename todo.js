const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let newToDo = document.createElement("li");
	toDoList.appendChild(newToDo);

	let newToDoValue = document.getElementById("addToDo").value;
	newToDo.innerText = newToDoValue;

	// let newCheckBox = document.createElement("input");
	// newCheckBox.setAttribute("type", "checkbox");
	// newToDo.appendChild(newCheckBox);

	form.reset();

	savedTodos.push({ task: newToDoValue });
	localStorage.setItem("todos", JSON.stringify(savedTodos));
});

// toDoList.addEventListener("click", function (e) {
// 	let clickItem = e.target;

// 	if (clickItem.tagName === "INPUT") {
// 		e.target.parentElement.classList.add("completed");
// 		clickItem.completed = true;
// 	}
//     if ( )
//     {
// 		clickItem.completed = false;
// 	}
// });
