function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
}


function checkLeapYear() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');
    const check = document.getElementById("check");


  check.addEventListener("click", function() {
    const year = parseInt(input.value, 10);

    if (!isNaN(year)) {
      if (isLeapYear(year))
