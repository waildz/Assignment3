


    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesLetter = "";
    var letter = []

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var guessesLetterText = document.getElementById("guesses-letter-text");

     document.onkeyup = function(event) {

    var userGuess = event.key;
        letter.push(userGuess)
    
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
        
        if (userGuess === computerGuess) {
            wins++;
            confirm("How did you win? Play, again?")
            guessesLeft = 10;
            letter = [];
        }else {
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            losses++;
            confirm("GAME OVER, SUCKA! Try again?")
            guessesLeft = 10;
            letter = [];
            
        }
        

        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "guesses left: " + guessesLeft;
        guessesLetterText.textContent = "your guesses so far: "+letter 
    };