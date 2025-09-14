function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  let winner = '';

  if (userChoice === computerChoice) {
    winner = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = "You win! ";
  } else {
    winner = "Computer wins! ";
  }

  document.getElementById('winner').textContent = winner;
}
s