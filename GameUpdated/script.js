const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const whoWon = document.getElementById("whoWon");
let gameCount = 1;
let countEnd =3;
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("playerscore");
const computerScoreDisplay = document.getElementById("computerscore");


function playGame(playerClick){
    
    const computerPick = choices[Math.floor(Math.random() * 3 )];
    console.log(computerPick);
    let score = "";
    gameCount++;
    console.log(gameCount);

    
    if (playerClick == computerPick){
        score = "It's a Draw";
    }
    else if (playerClick == "rock" && computerPick == "paper"){
        score = "You Lost";
        computerScore++;
    }
    else if (playerClick == "rock" && computerPick =="scissors"){
        score = "You Won";
        playerScore++;
    }
    else if (playerClick == "paper" && computerPick =="rock"){
        score = "You Won";
        playerScore++;
    }
    else if (playerClick =="paper" && computerPick =="scissors"){
        score = "You Lost";
        computerScore++;
    }
    else if (playerClick =="scissors" && computerPick =="paper"){
        score = "You Won";
        playerScore++;
    }
    else {
        score = "You Lost";
        computerScore++;
    }

    playerChoice.textContent = `You picked ${playerClick}`;
    computerChoice.textContent = `The Computer picked ${computerPick}`;
    whoWon.textContent = score;
        console.log(score);    
        console.log(playerScore);
        console.log(computerScore);
    played.textContent = `You played: ${gameCount} times`;    
    playerscore.textContent = `Your Score: ${playerScore}`;
    computerscore.textContent = `Computer Score: ${computerScore}`;
      }    
    
