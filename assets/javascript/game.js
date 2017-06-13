// declare variables for game

// declare initial arrays
var answerBank = ["Apple", "Forest", "Romper", "Tasty", "Floof", "Covfefe"];
var guessesMade = []; // track letters chosen
var displayAnswer = []; // holds number of _ based on answer.length



// select random choice in answerBank to start the game
var randomChoice = Math.floor((Math.random() * answerBank.length) + 1);
var answer = answerBank[randomChoice];

// display the proper # of _'s
displayAnswer.fill("_",0, answer.length);

// display alert on result of game
function gameOver(result){
	if (result === "lose"){
		alert("You Lose!"); // ran out of chances
		document.getElementById("#hangman").src = "assets/images/Stage7.jpg";
	} else	{
		alert("You Win!"); // matched the word
	}
};

function changeLetter(letter) {
    var idSelected = document.getElementById(letter);
    document.setAttribute("", ".chosenLetter");
};

function wrongGuess(count) {
	var htmlUpdate = "<h2> " + count + " of 6</h2>";
	document.querySelector("#tracker").innerHTML = htmlUpdate;

	if (count === 1) {
		document.getElementById("#hangman").src = "assets/images/Stage2.jpg";
	} else if (count === 2) {
		document.getElementById("#hangman").src = "assets/images/Stage3.jpg";
	} else if (count === 3) {
		document.getElementById("#hangman").src = "assets/images/Stage4.jpg";
	} else if (count === 4) {
		document.getElementById("#hangman").src = "assets/images/Stage5.jpg";
	} else {
		document.getElementById("#hangman").src = "assets/images/Stage6.jpg";
	}
};

// event to capture key pressed //
document.onkeyup = function(event) {
	var guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("You selected " + guess);

	var correctGuess = false;

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
	}
	// if guessesMade.length < 5, game continues
		// else game over
	if (guessesMade.length < 6) {
		return;
	} else {
		gameOver("lose");
	}
}