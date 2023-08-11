let playNext = (playerChoice) => {
   let computer = Math.floor(Math.random() * 3);
   let computerChoice = 
   computer === 0 
   ? "rock"
   : computer === 1
   ? "paper"
   : "scissors";

   let result = 
   playerChoice === computerChoice
   ? "Tie game!"
   : playerChoice === "rock" && computerChoice === "paper"
   ? `Player: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins!`
   : playerChoice === "paper" && computerChoice === "scissors"
   ? `Player: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins!`
   : playerChoice === "scissors" && computerChoice === "rock"
   ? `Player: ${playerChoice}\nComputer: ${computerChoice}\nComputer wins!`
   : `Player: ${playerChoice}\nComputer: ${computerChoice}\nPlayer wins!`;
   alert(result);
   playAgin()
}

const playAgin = () => {
   let toPlayAgain = confirm("Do you want to play again?");
   toPlayAgain === true 
   ? location.reload() 
   : alert("Thank's for playing") 
   
}

let playGame = () => {
   let letsStart = confirm("Shall you play rock, paper, scissors?");
   if (letsStart) {
      while(true) {
         let playerChoice = prompt("Please enter rock, paper, or scissors"); 
         playerChoice = isPlayerChoice(playerChoice);
         if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            playNext(playerChoice) 
            break
         } 
         else if (!playerChoice)  {
            alert("I see you changed your mind, good bye.")
            break
         }
         else {
            alert("You didn't enter rock, paper, or scissors")
            continue
         }
      }
      
   } else {
      alert("Maybe next time")
   }
}

const isPlayerChoice = (playerChoice) => {
   if (playerChoice === "" || playerChoice) {
      return playerChoice.trim().toLowerCase();
   } else {
      return false;
   }
}

playGame();
