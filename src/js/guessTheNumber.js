"use strict"
const GTNbtn = document.getElementById('GTNbtn');
const randomGuess = document.getElementById('randomGuess');
const guessTheNumberResult = document.getElementById('guessTheNumberResult');

GTNbtn.addEventListener('click', function()  {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (+randomGuess.value === randomNumber) {
      guessTheNumberResult.textContent =
        'Вітаю, ви вгадали число! ${randomNumber}';
      guessTheNumberResult.style.color = 'green';
    } else {
      guessTheNumberResult.textContent =
        'Ви програли, комп’ютер загадав ${randomNumber}. (Це число від 1 до 10)';
      guessTheNumberResult.style.color = 'red';
    }
  });
  
