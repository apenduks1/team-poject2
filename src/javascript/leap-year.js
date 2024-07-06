function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const checkButton = document.getElementById('check');

  checkButton.addEventListener('click', function() {
    const yearString = input.value.trim(); // Отримуємо введене значення року як рядок
    const year = parseInt(yearString, 10); // Перетворюємо рядок на ціле число

    if (!isNaN(year)) { // Перевіряємо, чи введений рік є числом
      if (isLeapYear(year)) {
        output.textContent = `Ви народилися у високосний рік!`; // Виводимо текст, якщо рік високосний
      } else {
        output.textContent = `Ви народилися не у високосний рік!`; // Виводимо текст, якщо рік не високосний
      }
    } else {
      output.textContent = `Будь ласка, введіть коректний рік!`; // Виводимо текст, якщо введений рік не є числом
    }
  });
});
