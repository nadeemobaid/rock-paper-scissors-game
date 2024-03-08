const choices = ['rock', 'paper', 'scissors'];


function getCompChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let input = prompt("You choose: ");
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

function playRound(choice1, choice2) {
    let result = "";
    if (choice1 === choice2) {
        result = "Tie";
    } else if (choice1 === "rock" && choice2 === "paper") {
        result = "You Lose! paper beats rock.";
    } else if (choice1 === "rock" && choice2 === "scissors") {
        result = "You Win! rock beats scissors.";
    } else if (choice1 === "scissors" && choice2 === "paper") {
        result =  "You Win! scissors beats paper.";
    } else if (choice1 === "scissors" && choice2 === "rock") {
        result = "You Lose! rock beats scissors.";
    } else if (choice1 === "paper" && choice2 === "rock") {
        result =  "You Win! paper beats rock.";
    } else {
        
        result = "You Lose! scissors beats paper";
    }
    return result;
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
    alert("Welcome --play \nrock paper scissors!!");

    for (let i = 0; i < 5; i++) {
        const strRound = `Round ${i+1}:`;
        const loseReg = /lose/i;
        const winReg = /win/i;
        const playerSelection = getPlayerChoice();
        const computerSelection = getCompChoice(choices);

        console.log("You: " + playerSelection + "\n" + "Computer: " + computerSelection);
    
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(strRound,roundResult);

        if (winReg.test(roundResult)){
            playerScore += 1;
        } else if (loseReg.test(roundResult)){
            compScore +=1;
        }

     }

    console.log("Computer point: " + compScore + " \nYour point: " + playerScore);


     console.log(theWinner(playerScore, compScore));

}

playGame();