const randomGuess = document.querySelector(".guessTheNumber__input")
const result = document.querySelector(".guessTheNumber__result")
const btn = document.querySelector(".guessTheNumber__btn--input")
console.log(btn);
console.log(5);
btn.addEventListener("click", (e) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
    if(+randomGuess.value === randomNumber){
        result.textContent = `Вітаю, ви вгадали число! ${randomNumber} `
        result.style.color = "green";
    }else  {
        result.textContent = `Ви програли, комп’ютер загадав ${randomNumber}.(Це число від 1 до 10) `
        result.style.color = "red";
    
    }
  });

