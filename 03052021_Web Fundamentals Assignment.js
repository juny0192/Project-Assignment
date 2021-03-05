function countDown(sec) {
	let timer = setInterval(function () {
		sec--;
		if (sec <= 0) {
			clearInterval(timer);
			console.log("DONE!");
		} else {
			console.log(sec);
		}
	}, 1000);
}

function randomGame() {
	let time = 0;
	let timer = setInterval(function () {
		time++;
		let num = Math.random();
		if (num > 0.75) {
			clearInterval(timer);
			console.log(
				`It took ${time} try/tries before we found a number greater than 0.75`,
			);
		}
	}, 1000);
}
