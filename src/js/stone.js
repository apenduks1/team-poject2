let userScore = 0;
let computerScore = 0;
const userScore_parag = document.querySelector('.score-you')
const computerScore_parag = document.querySelector('.score-computer')
const result = document.querySelector('.result')
const stone = document.querySelector('.cards--stone')
const scissors = document.querySelector('.cards--scissors')
const paper = document.querySelector('.cards--paper')
const stoneButton = document.querySelector('.stone-btn')



function getComputerChoice() {
    const choices = ["stone", "scissors", "paper"]
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
};

function highlightComputerChoice(choice) {

    stone.classList.remove('highlight');
    scissors.classList.remove('highlight');
    paper.classList.remove('highlight');


    if (choice === "stone") {
        stone.classList.add('highlight');
    } else if (choice === "scissors") {
        scissors.classList.add('highlight');
    } else if (choice === "paper") {
        paper.classList.add('highlight');
    }
}

function wins() {
    console.log("Ви виграли раунд!");
    userScore++;
    userScore_parag.innerHTML = userScore;
    computerScore_parag.innerHTML = computerScore;
    result.innerHTML = "Ви виграли раунд!"
    result.style.color = '#039900'
}

function lose() {
    console.log("Ви програли раунд!");
    computerScore++;
    userScore_parag.innerHTML = userScore;
    computerScore_parag.innerHTML = computerScore;
    result.innerHTML = "Ви програли раунд!"
    result.style.color = 'red'
}

function draw() {
    console.log("Нічья!");
    result.innerHTML = "Нічия!"
    result.style.color = 'DeepSkyBlue'
}

function choice(userChoice) {
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

function main() {
    stone.addEventListener('click', function () {
        choice("stone")
    });

    scissors.addEventListener('click', function () {
        choice("scissors")
    });

    paper.addEventListener('click', function () {
        choice("paper")
    });
    
    stoneButton.addEventListener('click', function() {
        choice("stone");
    });
};

main();