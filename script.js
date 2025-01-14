let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#yourScore");
const compScorePara = document.querySelector("#compScore");

const compChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = ()=>{
    console.log("draw game");
    msg.innerText = "draw game";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin){
        console.log("you win");
        msg.innerText = `you win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
        
    }else{
        console.log("you lose");
       msg.innerText = `you lose! ${compchoice} beats ${userChoice}`;
       msg.style.backgroundColor = "red";
       compScore++;
       compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice" , userChoice);
// generate computer choice
const compchoice = compChoice();
console.log("comp choice = " , compchoice)
if(userChoice === compchoice){
    // draw game
    drawGame();
  }  else{
    let userWin = true;
    if(userChoice ===  "rock"){
        // scissors, paper
        userWin = compchoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        // rock, scissors
       userWin =  compchoice === "scissors" ? false : true;
     } else{
        // rock, paper
        userWin = compchoice === "rock" ? false : true;
    
       }
    showWinner(userWin, userChoice, compchoice);

    }


}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});








