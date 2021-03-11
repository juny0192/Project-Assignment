const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

const savedToDos = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < savedToDos.length; i++) {
	let newToDo = document.createElement("li");
	newToDo.innerText = savedToDos[i];
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

	let newRmBtn = document.createElement("button");
	newRmBtn.innerHTML = "&#x2715";
	newRmBtn.classList.add("remove");

	let newCheckBox = document.createElement("input");
	newCheckBox.setAttribute("type", "checkbox");

	toDoList.appendChild(newToDo);
	newToDo.prepend(newCheckBox);
	newToDo.append(newRmBtn);

	form.reset();

	savedToDos.push(newToDo.innerText);
	localStorage.setItem("todos", JSON.stringify(savedToDos));
});

toDoList.addEventListener("click", function (e) {
	if (e.target.tagName === "BUTTON") {
		e.target.parentElement.remove();
		localStorage.removeItem(savedToDos);
	}

	if (e.target.tagName === "INPUT") {
		e.target.parentElement.classList.toggle("completed");
		localStorage.setItem("completed", true);
	} else {
		localStorage.setItem("completed", false);
	}
});
