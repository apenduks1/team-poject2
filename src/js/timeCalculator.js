'use stict'

const input = document.getElementsByClassName("timeCalculator__input")
const result = document.getElementsByClassName("timeCalculator__paragraph")
const btn = document.getElementsByClassName("timeCalculator__btn--input")
console.log(btn);
let hour = 0
let  minets = 0
let seconds = 0
btn.addEventListener('click', (e) =>{
    result = `${hour}:${minets}:${seconds} `
    hour = +input.value / 24 
    minets = (+input.value - hour) /60
    seconds = ((+input.value - hour) - minets) /60
})