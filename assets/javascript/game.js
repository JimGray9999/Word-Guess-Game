// declare variables for game

// declare initial arrays
var answerBank = ["Apple", "Forest", "Romper", "Tasty", "Floof", "Covfefe", "JQuery", "Moo"];
var guessesMade = []; // track letters chosen
var displayAnswer = []; // holds number of _ based on answer.length
var guessAnswer = []; // player's current guess

// select random choice in answerBank to start the game
var randomChoice = Math.floor((Math.random() * answerBank.length) + 1);
var answer = answerBank[randomChoice];

// display the proper # of _'s
var startAnswer = displayAnswer.fill("_",0, answer.length)
document.getElementById("theAnswer").innerHTML = startAnswer;

// display alert on result of game
function gameOver(result){
	if (result === "lose"){
		alert("You Lose!"); // ran out of chances
	} else	{
		alert("You Win!"); // matched the word
	}
	var again = confirm("Play again?");
	if (again === true){
		newGame();
	}
};

function newGame() {
	// reset initial arrays
	guessesMade = []; // track letters chosen
	displayAnswer = []; // holds number of _ based on answer.length
	guessAnswer = []; // player's current guess

	// select new random choice from answerBank to start the game
	randomChoice = Math.floor((Math.random() * answerBank.length) + 1);
	answer = answerBank[randomChoice];

	// display the proper # of _'s
	startAnswer = displayAnswer.fill("_",0, answer.length)
	document.getElementById("theAnswer").innerHTML = startAnswer;

	// reset hangman image
	document.getElementById("hangman").src = "assets/images/Stage1.jpg";

	// reset displayed number of guesses
	document.querySelector("#tracker").innerHTML = "<h2> 0 of 6</h2>";
}

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
	console.log("You selected " + guess);

	var correctGuess = false;

	document.getElementById("A").className = "chosenLetter";

	// logic to match letter with answer
		// loop thru the answer to check for a match
		// use indexof to check the answer for letter matches
		// update the displayed answer with the answers made
	for (i = 0; i < answer.length ; i++){
		if (guess === answer[i]){
			displayAnswer[i] = guess;
			correctGuess = true;
		}
	}

	// add latest guess to guessesMade
	guessesMade.push(guess);

	if (correctGuess === false){
		wrongGuess(guessesMade.length);
	} else {
		return;
	}

	// if the displayAnswer matches the answer, player wins
	if (displayAnswer === answer){
		gameOver("win");
	}
}