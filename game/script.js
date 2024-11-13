const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const whoWon = document.getElementById("whoWon");

function playGame(playerClick){
    const computerPick = choices[Math.floor(Math.random() * 3 )];
    console.log(computerPick);
    let score = "";

    if (playerClick == computerPick){
        score = "It's a Draw";
    }
    else if (playerClick == "rock" && computerPick == "paper"){
        score = "You Lost";
    }
    else if (playerClick == "rock" && computerPick =="scissors"){
        score = "You Won";
    }
    else if (playerClick == "paper" && computerPick =="rock"){
        score = "You Won";
    }
    else if (playerClick =="paper" && computerPick =="scissors"){
        score = "You Lost";
    }
    else if (playerClick =="scissors" && computerPick =="paper"){
        score = "You Won";
    }
    else {
        score = "You Lost";
    }

    playerChoice.textContent = `You picked ${playerClick}`;
    computerChoice.textContent = `The Computer picked ${computerPick}`;
    whoWon.textContent = score;
        console.log(score);    
}