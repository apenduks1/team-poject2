document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".three_numbers__num input[type='number']");
  const arr = [];

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      arr.length = 0;

      inputs.forEach((input) => {
        arr.push(parseFloat(input.value) || 0);
      });

      const biggestNumberResult = Math.max(...arr);

      const spanBiggestResult = document.getElementById("result");
      spanBiggestResult.textContent = ` Найбільше число, яке ви ввели - ${biggestNumberResult}`;
    });
  });
});