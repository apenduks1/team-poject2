document.addEventListener('DOMContentLoaded', (event) => {

    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultDisplay = document.querySelector('.calculator__result');
    
    const addButton = document.querySelector('.calculator__plus');
    const subtractButton = document.querySelector('.calculator__subtract');
    const multiplyButton = document.querySelector('.calculator__multiply');
    const divideButton = document.querySelector('.calculator__divide');
    const equalButton = document.querySelector('.calculator__operation_equal');

    let number1 = 0;
    let number2 = 0;
    let operation = null;

    addButton.addEventListener('click', () => {
        operation = 'add';
    });

    subtractButton.addEventListener('click', () => {
        operation = 'subtract';
    });

    multiplyButton.addEventListener('click', () => {
        operation = 'multiply';
    });

    divideButton.addEventListener('click', () => {
        operation = 'divide';
    });

    function validateNumber(input) {
        if (isNaN(input)) {
            return false;
        }
        return true;
    }

    equalButton.addEventListener('click', () => {
        number1 = +number1Input.value;
        number2 = +number2Input.value;
        console.log(number1)
        console.log(typeof number1);
        let result = 0;

        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                if (number2 !== 0) {
                    result = number1 / number2;
                } else {
                    result = 'Помилка';
                }
                break;
            default:
                result = 'Виберіть операцію';
        }

        resultDisplay.textContent = result;
    });
});
