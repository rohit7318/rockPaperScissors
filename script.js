const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const bothChoiceEl = document.getElementById("bothChoice");
const scoreEl = document.getElementById("score");
const winLossEl = document.getElementById("winLoss");
const resetButtonEl = document.getElementById("reset");

let computerMove , userMove='';

document.addEventListener("DOMContentLoaded",()=>{

    const storedScore = localStorage.getItem("score");
    if(storedScore)
    {
        score = JSON.parse(storedScore);
        scoreEl.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
})


let score = {
    wins:0,
    losses:0,
    ties:0
}


let winLoss = "";

const array = ["rock","paper","scissors"];

rock.addEventListener("click",function(){
    playGame("rock");
});

paper.addEventListener("click",function(){
    playGame("paper");

});

scissors.addEventListener("click",function(){
    playGame("scissors");

});

resetButtonEl.addEventListener("click",function()
{
    if(score.wins===0 && score.ties===0 &&score.losses===0)
    {
        resetButtonEl.disabled = true;
    }
    else
    {
        score.wins=0;
        score.losses=0;
        score.ties=0;
        bothChoiceEl.innerText ="";
        winLossEl.innerText ="";
        scoreEl.innerText ="";
    }
    scoreEl.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    resetButtonEl.disabled = true;
});


function playGame(userMove)
{
    resetButtonEl.disabled =false;
    let computerMove =  getComputerMove();
    let result =  compareMoves(userMove,computerMove);
    
    updateResult(result);
}

function getComputerMove()
{
    let randomNum = parseInt(Math.random() *3);
    return array[randomNum];
}



function compareMoves(user , computer)
{
    let result = "";
    if(user==="rock" && computer==="paper")
    {
        winLoss="You Lose..";
        score.losses++;
        // result =`You : ${user}  Computer : ${computer}`;
        result =`You <img src="${user}-emoji.png" alt="" class="move-icon">
        <img src="${computer}-emoji.png" alt="" class="move-icon">Computer`;
    }
    else if(user==="paper" && computer==="scissors")
    {
        winLoss="You Lose..";
        score.losses++;
        // result =`You : ${user}  Computer : ${computer}`;
        result =`You <img src="${user}-emoji.png" alt="" class="move-icon">
        <img src="${computer}-emoji.png" alt="" class="move-icon">Computer`;
    }
    else if(user==="scissors" && computer==="rock")
    {
        winLoss="You Lose..";
        score.losses++;
        // result =`You : ${user}  Computer : ${computer}`;
        result =`You <img src="${user}-emoji.png" alt="" class="move-icon">
        <img src="${computer}-emoji.png" alt="" class="move-icon">Computer`;
    }
    else if(user === computer)
    {
        winLoss="Tie..";
        score.ties++;
        // result =`You : ${user}  Computer : ${computer}`;
        result =`You <img src="${user}-emoji.png" alt="" class="move-icon">
        <img src="${computer}-emoji.png" alt="" class="move-icon">Computer`;
    }
    else 
    {
        winLoss="You Win..";
        score.wins++;
        // result =`You : ${user} \n Computer : ${computer}`;
        result =`You <img src="${user}-emoji.png" alt="" class="move-icon">
        <img src="${computer}-emoji.png" alt="" class="move-icon">Computer`;

    }
    return result;
}

function updateResult(result)
{
    
    winLossEl.innerText = winLoss;
    scoreEl.innerText= `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    bothChoiceEl.innerHTML = result;
    localStorage.setItem("score",JSON.stringify(score));
}