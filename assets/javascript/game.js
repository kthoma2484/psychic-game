
$(document).ready(function(){

    let numWins = 1;
    let numLoss = 1;
    let numLeft= 9;


    // computer picks random letter
    
    let theLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    console.log("All letters in array available")

    let winningLetter = "";
    let playerLetter = "";
 

    let newWinningLetter = function () {
        winningLetter = theLetters[Math.floor(Math.random() * theLetters.length)];
        console.log("this is the winning letter = " + winningLetter);
    }
    
    newWinningLetter();

    $(document).keypress(function(event) {
       
        
        playerLetter = String.fromCharCode(event.which);
        console.log("this is the player guess = " + playerLetter);

        for (let i = 0; i < theLetters.length; i++) {

            if ( winningLetter != playerLetter && playerLetter == theLetters[i]) {
                //if the guessed letter is wrong, then...
                $("#guessLeftValue").html(numLeft = numLeft + -1); // guesses left decreases by 1
                if ($("#guessMadeValue").html() == "") { // to ommit the comma from the first value
                    $("#guessMadeValue").append(playerLetter);    
                    } else $("#guessMadeValue").append(", " + playerLetter); //player letter guesses appear when not the winning letter  
            } else if ( winningLetter == playerLetter && playerLetter == theLetters[i]) {
                // if player guess is same as winning number, then...
                $("#winValue").html(numWins++); // win value increases by 1
                $("#computerLetterValue").html(winningLetter); // winning letter displayed
                $("#guessLeftValue").html(numLeft = 9); // guesses left resets 
                $("#guessMadeValue").empty(); // letters guessed resets
                alert("Yes! You got it right. The winning letter is " + "'" + winningLetter + "'" + ". You get a high-five!"); // winner alert displays
                newWinningLetter();
            }
        
            if ( numLeft < 1) {
                // if 9 guesses are exceeded without a win, then...
                $("#guessLeftValue").html(numLeft = 9); // guesses left resets
                $("#guessMadeValue").empty(); // letters guessed resets
                $("#lossValue").html(numLoss++); // losses value increases by 1
                $("#computerLetterValue").html("- My letter was " + "'" + winningLetter + "'");
                newWinningLetter();
                
            }
        }
    });
   
});
