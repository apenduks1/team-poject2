
'use strict'

const input = document.getElementsByClassName("timeCalculator__input")[0];
const timeCalcutaorResult = document.getElementsByClassName("timeCalculator__paragraph")[0];
const button = document.getElementsByClassName("timeCalculator__btn--input")[0];

button.addEventListener('click', function() {
    let totalSeconds = parseInt(input.value);

    let day = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;

    let hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let result = `${day}дн ${hour}:${minutes}:${seconds}`;
    timeCalcutaorResult.textContent = result;
});