userscore=0;
compscore=0;

let choice = document.querySelectorAll("button");
let para = document.querySelector(".result");
let score1 = document.querySelector("#user");
let score2=document.querySelector("#comp");
let option=["rock","paper","scissor"];

function draw(para){
para.style.backgroundColor= "rgb(3, 3, 26)";
if(para.innerText==="Game Was Draw"){
    para.innerText="Game Draws!Again";
}else{
    para.innerText = "Game Was Draw";
}};

function genchoice(option){
const rand = Math.floor(Math.random()*3);
return rand;
};

function win(){
      para.innerText= "You Win! "+userChoice +" beats " +compchoice;
      para.style.backgroundColor="green";
      userscore++;
      score1.innerText=userscore;
    };

function winner(userChoice,compChoice){
    if(userChoice === compchoice){
     draw(para);
    }
    else{ 
    if(userChoice==="rock" && compchoice==="scissor"){
       win();
    }
      else if(userChoice==="scissor" && compchoice==="paper"){
        win();
      }
      else if(userChoice==="paper" && compchoice==="rock"){
        win();
      }
      else{
        para.innerText= "You Lose !"+compchoice +" beats " +userChoice;
        para.style.backgroundColor="red";
        compscore++;
        score2.innerText=compscore;
      }}
};
let compchoice;
let userChoice;
 choice.forEach((select)=>{
select.addEventListener("click",()=>{
    userChoice = select.getAttribute("id");
    console.log(userChoice);
    let val = genchoice();
compchoice =option[val];
    winner(userChoice,compchoice);
    
})
});

       

function change(choice){
  if(choice.id === "rock"){
para.innerText="You Win";
console.log("happy");
  }};
choice.addEventListener("click",(change));


// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".select");
// const msg = document.querySelector(".result");

// const userScorePara = document.querySelector("#user");
// const compScorePara = document.querySelector("#comp");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissor"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = "You win! Your", {userChoice} ,"beats", {compChoice};
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = "You lost. ",{compChoice} ,"beats your" ,{userChoice};
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   //Generate computer choice
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     //Draw Game
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //scissors, paper
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       //rock, scissors
//       userWin = compChoice === "scissor" ? false : true;
//     } else {
//       //rock, paper
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((select) => {
//   select.addEventListener("click", () => {
//     const userChoice = select.getAttribute("id");
//     playGame(userChoice);
//   });
// });







