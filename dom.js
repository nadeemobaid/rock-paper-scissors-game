function playRound(choice1, choice2) {
   
    switch () {
        case (choice1 == choice2):
            return "Tie";
            break;
        case ( choice1 > choice2):
            return "com: WIN \n you: LOSE";
            break;

        case (choice1 < choice2):
            return "you: WIN \n com: lose";
            break;
    }

}

console.log(playRound(3, 5));