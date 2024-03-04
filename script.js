const choices = ['rock', 'paper', 'scissors'];
function getCompChoice  (choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let  playerSelection= prompt("enter your choice",);
let computerSelection = getCompChoice(choices) ;

console.log("Player: "+ playerSelection +"\n" +"Computer: "+ computerSelection);

function gameResult (playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        console.log("Tie");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("Computer WINs");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("you WIN!!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("you WINN!!");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer Wins");
    } else if (playerSelection ==="paper" && computerSelection === "rock") {
        console.log("you Win");
    } else {
        console.log("compter wins");
    }

}

let whoWins = gameResult(playerSelection,computerSelection);
