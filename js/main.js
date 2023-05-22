const variants = {
  1: 'rock',
  2: 'paper',
  3: 'scissors',
};

let plWins = 0;
let compWins = 0; 
const round = (playerChoice) => {
  let computerChoice = Math.floor(Math.random()*3 + 1);
  //let userChoice = +prompt("Choose your variant:\n1 - rock\n2 - paper\n3 - scissors");
  let resBegin = "It's " + variants[playerChoice] + ' vs ' + variants[computerChoice] + ".";
  let result;
  if (playerChoice == computerChoice) {
    result = "It's a draw";
  } else if (playerChoice == 1 && computerChoice == 3) {
    plWins += 1;
    result = "You're a winner!";
  } else if(playerChoice == 3 && computerChoice == 1) {
    compWins += 1;
    result = "You lost. Try again";
  } else if (playerChoice > computerChoice) {
    plWins += 1;
    result = "You're a winner";
  } else {
    compWins += 1;
    result = "You lost. Try again";
  }
  let resObj = {
    plString: variants[playerChoice],
    compString: variants[computerChoice],
    result: resBegin + " " + result,
  }
  return resObj;
}

const makePlayerChoice = (playerChoice) => {
  let resObj = round(playerChoice);
  let { plString, compString, result } = resObj;
  
  let divImgResult = document.querySelector(".img-result");
  let resultsDiv = document.querySelector(".results");
  resultsDiv.classList.remove("hidden");
  let scoreDiv = document.querySelector(".score");


  let plDiv = divImgResult.firstElementChild;
  plDiv.innerHTML = "";
  let compDiv = divImgResult.lastElementChild;
  compDiv.innerHTML = "";

  let textDiv = document.querySelector(".text-result");

  scoreDiv.textContent = `Score: ${plWins} - ${compWins}`;

  let imgPlayer = document.createElement('img');
  imgPlayer.src = `./img/${plString}.jpeg`;
  imgPlayer.alt = `${plString[0].toUpperCase()}${plString.slice(1)}`;
  plDiv.insertAdjacentElement("afterbegin", imgPlayer);
  //hack to make results transitonable
  imgPlayer.style.opacity = 0;
  window.getComputedStyle(imgPlayer).opacity;
  imgPlayer.style.opacity = 1;

  let imgComputer= document.createElement('img');
  imgComputer.src = `./img/${compString}.jpeg`;
  imgComputer.alt = `${compString[0].toUpperCase()}${compString.slice(1)}`;
  compDiv.insertAdjacentElement("afterbegin", imgComputer);
  imgComputer.style.opacity = 0;
  window.getComputedStyle(imgPlayer).opacity;
  imgComputer.style.opacity = 1;

  textDiv.textContent = result;
}

