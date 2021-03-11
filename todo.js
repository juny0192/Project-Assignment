const toDoList = document.querySelector("#toDoList");
const form = document.querySelector("#submit");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	if (document.getElementById("addToDo").value.length === 0) {
		alert("You need to write To Do");
		return;
	}

	let newToDo = document.createElement("li");
	toDoList.appendChild(newToDo);

	let newToDoValue = document.getElementById("addToDo").value;
	newToDo.innerText = " " + newToDoValue + " ";

	let newCheckBox = document.createElement("input");
	newCheckBox.setAttribute("type", "checkbox");
	newToDo.appendChild(newCheckBox);

	let newRmBtn = document.createElement("button");
	newRmBtn.innerHTML = "&#x2715";
	newRmBtn.classList.add("remove");
	newToDo.appendChild(newRmBtn);

	form.reset();
});

toDoList.addEventListener("click", function (e) {
	let clickItem = e.target;

	if (clickItem.tagName === "BUTTON") {
		e.target.parentElement.remove();
	} else if (clickItem.tagName === "INPUT") {
		e.target.parentElement.classList.toggle("completed");
	}
});
