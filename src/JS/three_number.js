// Отримуємо посилання на інпути і елемент результату
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const num3Input = document.getElementById('number3');
const resultElement = document.getElementById('result');

// Функція, яка визначає найбільше число
function findBiggestNumber() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const num3 = parseFloat(num3Input.value);

  // Перевіряємо, чи всі інпути заповнені
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultElement.textContent = 'Введіть всі три числа';
    return;
  }

  // Визначаємо найбільше число
  const biggestNumber = Math.max(num1, num2, num3);

  // Оновлюємо результат
  resultElement.textContent = `Найбільше число, яке ви ввели - ${biggestNumber}`;
}

// Слухаємо зміни в інпутах
num1Input.addEventListener('input', findBiggestNumber);
num2Input.addEventListener('input', findBiggestNumber);
num3Input.addEventListener('input', findBiggestNumber);