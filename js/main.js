let variants = {
  1: 'rock',
  2: 'paper',
  3: 'scissors',
};

let round = (userChoice) => {
  let computerChoice = Math.floor(Math.random()*3 + 1);
  //let userChoice = +prompt("Choose your variant:\n1 - rock\n2 - paper\n3 - scissors");
  let resBegin = "It's " + variants[userChoice] + ' vs ' + variants[computerChoice] + ".";
  let result;
  if (userChoice == computerChoice) {
    result = "It's a draw";
  } else if (userChoice == 1 && computerChoice == 3) {
    result = "You're a winner!";
  } else if(userChoice == 3 && computerChoice == 1) {
    result = "You lost. Try again";
  } else if (userChoice > computerChoice) {
    result = "You're a winner";
  } else {
    result = "You lost. Try again";
  }
  return resBegin + " " + result;
}
