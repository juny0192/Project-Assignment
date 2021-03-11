const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

// let savedToDos = JSON.parse(localStorage.getItem("task"));
// for (let i = 0; i < savedToDos.lentgh; i++) {
// 	let newToDo = document.createElement("li");
// 	let newRmBtn = document.createElement("button");
// 	let newCheckBox = document.createElement("input");

// 	newToDo.innerText = savedToDos[i].task;
// 	newRmBtn;
// }

form.addEventListener("submit", function (e) {
	e.preventDefault();

	if (document.getElementById("addToDo").value.length === 0) {
		alert("You need to write To Do");
		return;
	}

	let newToDo = document.createElement("li");
	let newToDoValue = document.getElementById("addToDo").value;
	newToDo.innerText = " " + newToDoValue + " ";

	let newRmBtn = document.createElement("button");
	newRmBtn.innerText = "X";
	newRmBtn.classList.add("remove");

	let newCheckBox = document.createElement("input");
	newCheckBox.setAttribute("type", "checkbox");

	toDoList.appendChild(newToDo);
	newToDo.prepend(newCheckBox);
	newToDo.append(newRmBtn);

	form.reset();

	// localStorage.setItem("task", JSON.stringify(savedToDos));
});

toDoList.addEventListener("click", function (e) {
	if (e.target.tagName === "BUTTON") {
		e.target.parentElement.remove();
	} else if (e.target.tagName === "INPUT") {
		e.target.parentElement.classList.toggle("completed");
	}
});
