let userScore = 0;
let computerScore = 0;
const userScore_parag = document.querySelector('.score-you')
const computerScore_parag = document.querySelector('.score-computer')
const result = document.querySelector('.result')
const stone = document.querySelector('.cards--stone')
const scissors = document.querySelector('.cards--scissors')
const paper = document.querySelector('.cards--paper')
const stoneButton = document.querySelector('.stone-btn')

stoneButton.addEventListener('click', () => { 
    stoneButton.style.backgroundColor = '#6F6F6F';
    setTimeout(() => {
    stoneButton.style.backgroundColor = 'black';
    }, 200);
})

const getComputerChoice = () => {
  const choices = ["stone", "scissors", "paper"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

const highlightComputerChoice = (choice) => {
  [stone, scissors, paper].forEach((element) => element.classList.remove('highlight'))

  switch (choice) {
    case "stone":
      stone.classList.add('highlight');
      break;
    case "scissors":
      scissors.classList.add('highlight');
      break;
    case "paper":
      paper.classList.add('highlight');
      break;
  }
}

const wins = () => {
  console.log("Ви виграли раунд!");
  userScore++;
  userScore_parag.innerHTML = userScore;
  computerScore_parag.innerHTML = computerScore;
  result.innerHTML = "Ви виграли раунд!";
  result.style.color = '#039900';
}

const lose = () => {
  console.log("Ви програли раунд!");
  computerScore++;
  userScore_parag.innerHTML = userScore;
  computerScore_parag.innerHTML = computerScore;
  result.innerHTML = "Ви програли раунд!";
  result.style.color = 'red';
}

const draw = () => {
  console.log("Нічья!");
  result.innerHTML = "Нічия!";
  result.style.color = 'DeepSkyBlue';
}

const choice = (userChoice) => {
  const computerChoice = getComputerChoice();
  highlightComputerChoice(computerChoice); 

  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "paperstone":
    case "stonescissors":
      wins(userChoice, computerChoice);
      break;
    case "paperscissors":
    case "scissorsstone":
    case "stonepaper":
      lose(userChoice, computerChoice);
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "stonestone":
      draw(userChoice, computerChoice);   
      break;
  }
}

const main = () => {
  stone.addEventListener('click', () => {
    choice("stone");
    stone.style.backgroundColor = '#6F6F6F';
    setTimeout(() => {
      stone.style.backgroundColor = 'black';
    }, 200);
  });

  scissors.addEventListener('click', () => {
      choice("scissors");
      scissors.style.backgroundColor = '#6F6F6F';
    setTimeout(() => {
      scissors.style.backgroundColor = 'black';
    }, 200);
  });

  paper.addEventListener('click', () => {
      choice("paper");
      paper.style.backgroundColor = '#6F6F6F';
    setTimeout(() => {
      paper.style.backgroundColor = 'black';
    }, 200);
  });
};

main();