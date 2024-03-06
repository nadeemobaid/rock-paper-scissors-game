const choices = ['rock', 'paper', 'scissors'];


function getCompChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let input = prompt("WELCOME to \"rock paper scissors GAME\"!!");
    const inputRegex = /rock|paper|scissors/i;
    let playerChoice = "";


    if (inputRegex.test(input)) {
        playerChoice = input.toLowerCase();
    } else {
        alert("ERROR!! \nEnter only \'rock paper scissors\' ");
        input = prompt("your Choice: ",);
        if (inputRegex.test(input)) {
            playerChoice = input.toLowerCase();
        } else {
            alert("System Will decide for you.")
            playerChoice = getCompChoice(choices);
        }
    }
    return playerChoice;
}

function theWinner(score1, score2) {
     let playerName = prompt("Your Name: ","Player");
    if (score1 === score2) {
        return "UGH!!! TIE";
    } else if (score1 > score2) {
        return `${playerName} WINNER`;
    } else {
        return "Computer --WINNER";
    }
}

function playGame() {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 3; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getCompChoice(choices);

        console.log("You: " + playerSelection + "\n" + "Computer: " + computerSelection);

        function playRound(choice1, choice2) {
            let result = "";
            if (choice1 === choice2) {
                result = "Tie";
            } else if (choice1 === "rock" && choice2 === "paper") {
                compScore += 1;
                result = "You Lose! paper beats rock.";
            } else if (choice1 === "rock" && choice2 === "scissors") {
                playerScore += 1;
                result = "You Win! rock beats scissors.";
            } else if (choice1 === "scissors" && choice2 === "paper") {
                playerScore += 1;
                result =  "You Win! scissors beats paper.";
            } else if (choice1 === "scissors" && choice2 === "rock") {
                compScore += 1;
                result = "You Lose! rock beats scissors.";
            } else if (choice1 === "paper" && choice2 === "rock") {
                playerScore += 1;
                result =  "You Win! paper beats rock.";
            } else {
                compScore += 1;
                result = "You Lose! scissors beats paper";
            }
            return result;
        }

        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("Computer point: " + compScore + " \nYour point: " + playerScore);


    console.log(theWinner(playerScore, compScore));

}

playGame();