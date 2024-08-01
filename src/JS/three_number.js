// Отримуємо посилання на інпути і елемент результату
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const num3Input = document.getElementById('number3');
const resultElement = document.getElementById('result');
const numbers = document.querySelectorAll('.number')
// Функція, яка визначає найбільше число
const numbersArr = []
numbers.forEach(num => {
  num.addEventListener('input', findBiggestNumber);
})
function findBiggestNumber() {

  if (!num1Input.value && !num2Input.value && !num3Input.value) {
    return resultElement.textContent = 'Введіть числа';
  }

  numbersArr.length = 0;
  numbers.forEach((input) => {
    numbersArr.push(parseFloat(input.value));
  });
  const biggestNumberResult = Math.max(...numbersArr);


  resultElement.textContent = `Найбільше число, яке ви ввели - ${biggestNumberResult}`;
}