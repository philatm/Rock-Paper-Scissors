const variants = {
  1: 'rock',
  2: 'paper',
  3: 'scissors',
};

let round = (playerChoice) => {
  let computerChoice = Math.floor(Math.random()*3 + 1);
  //let userChoice = +prompt("Choose your variant:\n1 - rock\n2 - paper\n3 - scissors");
  let resBegin = "It's " + variants[playerChoice] + ' vs ' + variants[computerChoice] + ".";
  let result;
  if (playerChoice == computerChoice) {
    result = "It's a draw";
  } else if (playerChoice == 1 && computerChoice == 3) {
    result = "You're a winner!";
  } else if(playerChoice == 3 && computerChoice == 1) {
    result = "You lost. Try again";
  } else if (playerChoice > computerChoice) {
    result = "You're a winner";
  } else {
    result = "You lost. Try again";
  }
  let resObj = {
    plString: variants[playerChoice],
    compString: variants[computerChoice],
    result: resBegin + " " + result,
  }
  return resObj;
}



