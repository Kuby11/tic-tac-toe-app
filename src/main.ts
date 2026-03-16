import './style.scss';
import './libs/finisher-header.es5.min'

const choices = ["rock", "paper","scissors"];
const playerDisplay = document.querySelector(".player-choice") as HTMLElement;
const computerDisplay = document.querySelector(".computer-choice") as HTMLElement;
const resultDisplay = document.querySelector(".result") as HTMLElement;
const playerScoreDisplay = document.querySelector(".player-score") as HTMLElement;
const computerScoreDisplay = document.querySelector(".computer-score") as HTMLElement;

let playerScore: number = 0;
let computerScore: number = 0;

function playGame(playerChoice: string){

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = ''

  if(playerChoice === computerChoice){
    result = "IT`S A TIE";
    console.log(result)
  }

  else{
    switch(playerChoice){
      case 'rock':
        result = (computerChoice === 'scissors') ? 'YOU WON' : 'YOU LOST'
        break;
      case 'paper':
        result = (computerChoice === 'rock') ? 'YOU WON' : 'YOU LOST'
        break;
      case 'scissors':
        result = (computerChoice === 'paper') ? 'YOU WON' : 'YOU LOST'
        break;
    }
  }

  playerDisplay.innerHTML = `PLAYER: <br> ${playerChoice}`;
  computerDisplay.innerHTML = `COMPUTER: <br> ${computerChoice}`

  resultDisplay.classList.remove('win-color', 'lose-color')
  switch(result){
    case 'YOU WON':
      resultDisplay.classList.add('win-color')
      resultDisplay.textContent = "YOU WON!"
      playerScore++
      playerScoreDisplay.textContent = playerScore as unknown as string
      break
    case 'YOU LOST':
      resultDisplay.classList.add('lose-color')
      resultDisplay.textContent = "YOU LOST!"
      computerScore++
      computerScoreDisplay.textContent = computerScore as unknown as string
      break
    case 'IT`S A TIE':
    resultDisplay.textContent = 'IT`S A TIE'
  }
}

const rockBtn = document.getElementById('button-rock') as HTMLElement;
const paperBtn = document.getElementById('button-paper') as HTMLElement;
const scissorsBtn = document.getElementById('button-scissors') as HTMLElement;

rockBtn.addEventListener('click', ()=>{
  playGame('rock')
})

paperBtn.addEventListener('click', ()=>{
  playGame('paper')
})

scissorsBtn.addEventListener('click', ()=>{
  playGame('scissors')
})

