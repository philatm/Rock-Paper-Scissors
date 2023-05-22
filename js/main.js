const variants = {
  1: 'rock',
  2: 'paper',
  3: 'scissors',
};

const round = (playerChoice) => {
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

const makePlayerChoice = (playerChoice) => {
  let divImgResult = document.querySelector(".img-result");

  let plDiv = divImgResult.firstElementChild;
  plDiv.innerHTML = "";
  let compDiv = divImgResult.lastElementChild;
  compDiv.innerHTML = "";

  let textDiv = document.querySelector(".text-result");
  
  let resObj = round(playerChoice);
  let { plString, compString, result } = resObj;

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

  let vsDiv = document.querySelector(".vs");
  vsDiv.classList.remove("vs-hidden");
  
  textDiv.textContent = result;
}

