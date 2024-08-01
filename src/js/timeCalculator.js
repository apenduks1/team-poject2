
'use strict'

const input = document.getElementsByClassName("timeCalculator__input")[0];
const timeCalcutaorResult = document.getElementsByClassName("timeCalculator__paragraph")[0];
const button = document.getElementsByClassName("timeCalculator__btn--input")[0];

button.addEventListener('click', function() {
    let totalMinutes = parseInt(input.value);

    const days = Math.floor(totalMinutes / 1440);
    totalMinutes %= 1440;
    const hours = Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
    const minutes = totalMinutes % 60;

    let result = `${days}дн ${hours}:${minutes}`;
    timeCalcutaorResult.textContent = result;
});