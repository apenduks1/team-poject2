console.log(1);
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const num3 = document.getElementById('number3');

function checkInputs() {
    const num1Value = +num1.value
    const num2Value = +num2.value
    const num3Value = +num3.value

    const maxNum = Math.max(num1Value, num2Value, num3Value);
    document.getElementById('result').textContent = `Найбільше число, яке ви ввели - ${maxNum}`;
    /*     if (num1 !== "" && num2 !== "" && num3 !== "") {
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            const n3 = parseFloat(num3);
        } else {
            document.getElementById('result').textContent = "Найбільше число, яке ви ввели - ";
        } */

}
num1.addEventListener('input', checkInputs)
num2.addEventListener('input', checkInputs)
num3.addEventListener('input', checkInputs)
