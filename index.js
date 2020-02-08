const startButton = document.querySelector('start');
const gameArea = document.querySelector('.game');
const scoreSpan = document.querySelector('.score');
let score = 0;

// Initializations for dots when first created
// size --- maybe a data attribute for value?
// color/image
// position on x axis
function init() {
	var height = randomSize() + "px";
	var position = randomPosition() + "px";

	var obj = document.createElement("div");
	obj.style.left = position;
	obj.style.height = height;
	obj.style.width = height;
	obj.classList.add("dot");
	//obj.setAttribute('data-point', '1');

	gameArea.appendChild(obj);

	obj.addEventListener("click", updateScore);

	return obj;
}

function randomSize() {
	return (Math.floor(Math.random() * 11) * 10);
}

function randomPosition() {
	return (Math.floor(Math.random() * 11) * 100);
}

function start() {
	setInterval(createDot, 5000);
}

function createDot() {
	var dot = init();
	//const dot = document.querySelector('.dot');
	setInterval(fall, 50);

	function fall() {
		var pos = parsePosition(dot.style.top) + 10;
		if (pos < 500) {
			dot.style.top = pos + "px";
		} else {
			clearInterval();
			dot.remove();
		}
	}
}


function parsePosition(pos) {
	if (pos === '') {
		pos = 0;
	}

	return parseInt(pos);
}

function updateScore() {
	score = score + 1;
	scoreSpan.innerHTML = score;
}


// Bugs
// ground level varies per size of dot
// the drop level changes when the dots come down too quickly