// declare variables for game

// declare initial arrays
var answerBank = ["apple", "forest", "romper", "tasty", "floof", "covfefe", 
				  "jquery", "moo", "arrays", "tableau", "meow", "flour"];
var guessesMade = []; // track letters chosen
var displayAnswer = []; // holds number of _ based on answer.length
var guessAnswer = []; // player's current guess

// select random choice in answerBank to start the game
var randomChoice = Math.floor(Math.random() * answerBank.length);
var answer = answerBank[randomChoice];

var muzak = document.getElementById("muzak");

// display the proper # of _'s
for (i = 0 ; i < answer.length ; i++){
	displayAnswer.push("_");
}

document.getElementById("theAnswer").innerHTML = "<h3> " + displayAnswer.join(' ') + "</h3>";

// display alert on result of game
function gameOver(result){
	if (result === "lose"){
		alert("You Lose!"); // ran out of chances
	} else	{
		alert("You Win!"); // matched the word
	}
	var again = confirm("Play again?");
	if (again){
		newGame();
	}
};

// reset variables, board, start new game
function newGame() {
	// reset initial arrays
	guessesMade = []; // track letters chosen
	displayAnswer = []; // holds number of _ based on answer.length
	guessAnswer = []; // player's current guess

	// select new random choice from answerBank to start the game
	randomChoice = Math.floor(Math.random() * answerBank.length);
	answer = answerBank[randomChoice];

	// display the proper # of _'s
	for (i = 0 ; i < answer.length ; i++){
		displayAnswer.push("_");
	}
	document.getElementById("theAnswer").innerHTML = "<h3> " + displayAnswer.join(' ') + "</h3>";

	// reset hangman image
	document.getElementById("hangman").src = "assets/images/Stage1.jpg";

	// reset displayed number of guesses
	document.querySelector("#tracker").innerHTML = "<h2> 0 of 6</h2>";

	// disable New Game button until game over
	document.getElementById("#newGameBtn").className = "btn btn-default disabled";
}

console.log("The answer is: " + answer); //console log entry for troubleshooting

function wrongGuess(count) {
	var htmlUpdate = "<h2> " + count + " of 6</h2>";
	document.querySelector("#tracker").innerHTML = htmlUpdate;

	if (count === 1) {
		document.getElementById("hangman").src = "assets/images/Stage2.jpg";
	} else if (count === 2) {
		document.getElementById("hangman").src = "assets/images/Stage3.jpg";
	} else if (count === 3) {
		document.getElementById("hangman").src = "assets/images/Stage4.jpg";
	} else if (count === 4) {
		document.getElementById("hangman").src = "assets/images/Stage5.jpg";
	} else if (count === 5){
		document.getElementById("hangman").src = "assets/images/Stage6.jpg";
	} else {
		document.getElementById("hangman").src = "assets/images/Stage7.jpg";
		gameOver("lose");
	}
};

// event to capture key pressed //
document.onkeyup = function(event) {
	var guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("You selected " + guess); //console log entry for troubleshooting

	var correctGuess = false; // reset boolean for correct guess made

	// check if key press is from a to z (keycodes 65-90)
	// update the displayed answer with the answers made
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		for (i = 0; i < answer.length ; i++){
			if (guess === answer[i]){
				displayAnswer[i] = guess;
				correctGuess = true;
			}
		}
	} else {
		return;
	}	

	// check if a correct guess was made
	if (correctGuess === true){
		document.getElementById("theAnswer").innerHTML = "<h3> " + displayAnswer.join(' ') + "</h3>";

		if (displayAnswer.join('') === answer){
		gameOver("win"); // if the displayAnswer matches the answer, player wins
		} else {
			return;
		}
	} else {
		guessesMade.push(guess);
		wrongGuess(guessesMade.length);
	}
}


// audio functions
function playMuzak() {
	muzak.play();
};

function pauseMuzak() {
	muzak.pause();
}