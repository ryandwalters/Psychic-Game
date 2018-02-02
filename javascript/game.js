    <script type="text/javascript">


    
    // create an array that lists all of the options that can be selected. in this case the alphabet. Computer picks a random letter somehow and it is compared against the letter selectec by the user.
        var computerGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x','y','z' ]

        

    // variables ot hole number of wins, losses, guessLeft, and lettersGuessed

        var wins = 0;
        var losses = 0;
        //var guessesLeft =  x = 9--# of times a letters was pressed
        //var lettersGuessed = array that captures letter key pressed. 9 indexes long. 
    
    // Use the document object to grab elements in our markup for the scoreboard
    //var userWins = document.getElementById('userWins');

    //var lettersGuessed = document.getElementById('lettersGuessed');


        //the game is to guess the letter that the computer is "thinking about", to guess the letter within a certain number of tries.

        //The Psychic Game - Guess what letter I'm thinking of:

        // use document object to grap elemens in our markup for the scoreboard. var ... =document.getElementBId("user-guess");

        // create scoreboard. variables to contain win loss data, number of guess, and letters guessed losses++

        // Wins: Var wins starts at 0. If you guess the correct letter, wins number increases by one. wins++ Game resets.

        // Losses: Var losses starts at 9\. If you do not guess the letter within 9 tries the losses number increases by one. Game resets. losses++

        // Guesses Left: each time a key is press the number 9 decreases by one in this variable.The variable is shown on the screen. Varable restarts at 9 when ever the game resets.  Games starts with 9 guesses. With each false guess the number of guesses decreases by one until it reaches zero and losses number increases by one and game starts over. loss--

        // Your Guesses so far: Each letter guesed is displayed in an array after guesses so far: The array clears when the letter is guessed or the number of letters in the array equals 9 total.

        // It woud be nice if the game said You win when the win number increased, or I win when the losses number increases.

        //event key is pressed. Using CharAt letter is turned into a number. That numberis compared to the computer generated alphabetnumber that created by using CharA


        // logic if (user letter === computer letter) { wins increase by one, game resets;} else if { (user letter is not computer letter) number of guesses decreases from 9 by 1, letters guessed displays letter,} else if...pattern repeats until x > 9.

        // if a letter is pressed twice it isn't added to the guessesList and it doesn't countas a guess

        //on key stroke, decide if it is when pressed or when finger lets go of key, 

        // Wins and losses total. They do not reset. Only start over at zero again when game is restarted.

   // This function is run whenever the user presses a key.
//    document.onkeyup = function(event) {

// // Determines which key was pressed.
// var userGuess = event.key;

// // Randomly chooses a choice from the options array. This is the Computer's guess.
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      
        
        
    </script>