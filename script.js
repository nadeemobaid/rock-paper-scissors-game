const choices = ['rock', 'paper', 'scissors'];

function playGame() {

    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {


        function getCompChoice(choices) {
            let randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        //  error i have to learn  regex  to do perform patter/ match
        function getPlayerChoice() {
            let input = prompt("WELCOME \n to \n rock paper scissors GAME!!");
            if ((input !== "rock") && (input !== "paper") && (input !== "scissors")) {
                alert("ERRO \n Enter only -- paper rock scissors");
                input = prompt("ENTER ONLY \n paper rock scissors");
            }
            return input.toLowerCase();
        }

        let playerSelection = getPlayerChoice();
        let computerSelection = getCompChoice(choices);

        console.log("Player: " + playerSelection + "\n" + "Computer: " + computerSelection);

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Tie";
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                compScore += 1;
                return "com: WIN \n you: LOSE";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore += 1;
                return "you: WIN \n com: lose";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore += 1;
                return "you: WIN \n com: lose";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                compScore += 1;
                return "com: WIN \n you: LOSE";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore += 1;
                return "you: WIN \n com: lose";
            } else {
                compScore += 1;
                return "com: WIN \n you: LOSE";
            }
        }
        
        console.log(playRound(playerSelection, computerSelection));

    }

    console.log("Comp point: " + compScore + " Your point: " + playerScore);

    function theWinner(playerScore, compScore) {
        if (playerScore === compScore) {
            return "UGH no one worthy enough to win.";
        } else if (playerScore > compScore) {
            return "you THE WINNER";
        } else {
            return "COMPUTER WINNER";
        }
    }

    console.log(theWinner(playerScore, compScore));

}

playGame();