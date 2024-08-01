let userScore = 0; 
let computerScore = 0; 
let userChoice = null; 
const userScore_parag = document.querySelector('.score-you'); 
const computerScore_parag = document.querySelector('.score-computer'); 
const result = document.querySelector('.result'); 
const stone = document.querySelector('.cards--stone'); 
const scissors = document.querySelector('.cards--scissors'); 
const paper = document.querySelector('.cards--paper'); 
const stoneButton = document.querySelector('.stone-btn'); 
 
const getComputerChoice = () => { 
  const choices = ["stone", "scissors", "paper"]; 
  const randomChoice = Math.floor(Math.random() * 3); 
  return choices[randomChoice]; 
}; 
 
const highlightComputerChoice = (choice) => { 
  [stone, scissors, paper].forEach((element) => element.classList.remove('highlight')); 
 
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
}; 
 
const wins = () => { 
  userScore++; 
  userScore_parag.innerHTML = userScore; 
  result.innerHTML = "Ви виграли раунд!"; 
  result.style.color = '#039900'; 
  result.style.opacity = '1';
}; 
 
const lose = () => { 
  computerScore++; 
  computerScore_parag.innerHTML = computerScore; 
  result.innerHTML = "Ви програли раунд!"; 
  result.style.color = 'red'; 
  result.style.opacity = '1';

}; 
 
const draw = () => { 
  result.innerHTML = "Нічия!"; 
  result.style.color = 'DeepSkyBlue'; 
  result.style.opacity = '1';

}; 
 
const playGame = () => { 
  if (!userChoice) { 
    alert("Будь ласка, виберіть варіант!"); 
    return; 
  } 
 
  const computerChoice = getComputerChoice(); 
  highlightComputerChoice(computerChoice); 
 
  switch (userChoice + computerChoice) { 
    case "scissorspaper": 
    case "paperstone": 
    case "stonescissors": 
      wins(); 
      break; 
    case "paperscissors": 
    case "scissorsstone": 
    case "stonepaper": 
      lose(); 
      break; 
    case "paperpaper": 
    case "scissorsscissors": 
    case "stonestone": 
      draw(); 
      break; 
  } 
 
  userChoice = null; 
}; 
 
stoneButton.addEventListener('click', playGame); 
 
stone.addEventListener('click', () => { 
  userChoice = "stone"; 
  highlightUserChoice(stone); 
}); 
 
scissors.addEventListener('click', () => { 
  userChoice = "scissors"; 
  highlightUserChoice(scissors); 
}); 
 
paper.addEventListener('click', () => { 
  userChoice = "paper"; 
  highlightUserChoice(paper); 
}); 
 
const highlightUserChoice = (choiceElement) => { 
  [stone, scissors, paper].forEach((element) => element.classList.remove('user-highlight')); 
  choiceElement.classList.add('user-highlight'); 
};
