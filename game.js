//array of computerChoices

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variables total number of wins, losses, userInput, userInputArray, computerInput

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userInput = String.fromCharCode().toLowerCase();
var computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var allKeysPressed = "";


// computer selects random letter from computerChoices array at the beginning of the game
function updateComputerChoices() {
    var randVal = Math.floor(Math.random() * computerChoices.length)
    console.log("rand=" + randVal);
    computerInput = computerChoices[randVal];
}

//user letter selected on key up
document.onkeyup = function (event) {
    userInput = event.key;



//--Needs work. The game is still allowing double guesses and is reducing the score when double guess happens. Attempted code below and still need to find a solution to this issue.

    //allKeysPressed = allKeysPressed +  userInput;
    //if (allKeysPressed.indexOf(computerChoices) < 0 && allKeysPressed.indexOf(computerChoices) >= 0) {
    //alert("The sound of one hand clapping.");
    



// if the userInput === computerInput is true, wins increase by one, alert message plays, guess counter starts at 10, and guess counter resets to 10 if true, and computer selects a random letter. 

if (userInput === computerInput) {
    wins++ , alert("You are a genius!");
    guessesLeft === 10;
    document.getElementById("userInput").innerHTML = userInput = " ";
    updateComputerChoices();
}
        
// if not true guesses decrease by one

else {
    guessesLeft--;
}

// when guess counter === 0 is true, the losses counter increases by one, alert plays with message, guess counter resets to 10, and computer selects new letter.

if (guessesLeft === 0) {
    losses++ , alert("Please try again.");
    guessesLeft = 10;
    document.getElementById("userInput").innerHTML = userInput = " ";
    updateComputerChoices();
}

//document.getElementById writes scores to scoreboard

document.getElementById("userWins").innerHTML = wins;
document.getElementById("userLosses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("userInput").innerHTML += userInput + " ";


console.log(wins + " user = " + userInput + " comp= " + computerInput);

}
    //console.log(wins + " user = " + userInput + " comp= " + computerInput);
    //trying to write code so that repeated keystrokes register in guessesleft
