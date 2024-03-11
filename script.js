const choices = ['rock', 'paper', 'scissors'];
const resultTxt = document.querySelector(".game-result > .txt");
const displayComputerScore = document.querySelector(".computerScore");
const displayplayerScore = document.querySelector(".playerScore");

let computerScore = 0;
let playerScore = 0;



function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        result = "Tie";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "paper") ? "You Lose" : "You Win";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "You Lose" : "You Win";
                break;

            case "scissors":
                    result = (computerChoice === "rock") ? "You Lose" : "You Win";
                    break;    
        }
    }
        resultTxt.textContent = `player: ${playerChoice}. computer: ${computerChoice}. ${result}`;

        resultTxt.classList.remove("greenTxt","redTxt");

        switch(result){
            case "You Win":
                resultTxt.classList.add("greenTxt");
                playerScore++;
                displayplayerScore.textContent = playerScore;
                break;
            case "You Lose":
                resultTxt.classList.add("redTxt");
                computerScore++;
                displayComputerScore.textContent = computerScore;
                break;
        }
}











