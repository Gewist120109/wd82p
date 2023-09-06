// 1. get input of human player using prompt method
// 2. store your input in a variable
// 3. get the weapon of computer
// 4.

function getComputerSelection() {
  const weapons = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You Lose!";
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    const playerSelection = prompt("Type your weapon!");
    const computerSelection = getComputerSelection();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
