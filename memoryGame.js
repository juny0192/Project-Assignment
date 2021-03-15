const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardFlipped = 0;
let returnPoint = false;
let currentScore = 0;
let lowScore = localStorage.getItem("low-score");

document.getElementById("restart").onclick = function () {
	location.href =
		"http://127.0.0.1:5501/SpringBoardCareerTrak/memory-game/index.html";
};

const COLORS = [
	"red",
	"blue",
	"green",
	"orange",
	"purple",
	"red",
	"blue",
	"green",
	"orange",
	"purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement("div");

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener("click", handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}

// TODO: Implement this function!
function handleCardClick(e) {
	// you can use event.target to see which element was clicked

	if (returnPoint) return;
	if (e.target.classList.contains("flipped")) return;

	let clickedCard = e.target;
	clickedCard.style.backgroundColor = clickedCard.classList[0];
	console.log("you just clicked", clickedCard);

	if (!card1 || !card2) {
		clickedCard.classList.add("flipped");
		card1 = card1 || clickedCard;
		card2 = card1 === clickedCard ? card2 : clickedCard;
	}

	if (card1 && card2) {
		returnPoint = true;
		let card1ClassName = card1.className;
		let card2ClassName = card2.className;

		if (card1ClassName === card2ClassName) {
			setScore(currentScore + 2);
			cardFlipped += 2;
			card1.removeEventListener("click", handleCardClick);
			card2.removeEventListener("click", handleCardClick);
			card1 = null;
			card2 = null;
			returnPoint = false;
			console.log(currentScore);
		} else {
			setTimeout(function () {
				setScore(currentScore - 1);
				card1.style.backgroundColor = "";
				card2.style.backgroundColor = "";
				card1.classList.remove("flipped");
				card2.classList.remove("flipped");
				card1 = null;
				card2 = null;
				returnPoint = false;
				console.log(currentScore);
			}, 700);
		}
	}

	if (cardFlipped === COLORS.length) {
		endGame();
		console.log("Game Over");
	}
}

function setScore(newScore) {
	currentScore = newScore;
	document.getElementById("currentScore").innerText = currentScore;
}

function endGame() {
	let lowScore = localStorage.getItem("low-score");

	if (currentScore < lowScore) {
		localStorage.setItem("low-score", currentScore);
	}
}
// when the DOM loads
createDivsForColors(shuffledColors);
