const containerGe = document.getElementById("container");

const containerQs = document.querySelector("#container");

const classSecond = document.getElementsByClassName("second");

const classThridOl = document.querySelector("ol .third");

//containerQs.innerText = "Hello!";

const secondDiv = document.querySelector(".footer");
secondDiv.classList.add("main");
secondDiv.classList.remove("main");

const newLi = document.createElement("li");
newLi.innerText = "four";

const ul = document.querySelector("ul");
ul.append(newLi);

const ol = document.querySelectorAll("ol li");
for (let ols of ol) {
	ols.style.backgroundColor = "green";
}

secondDiv.remove();
