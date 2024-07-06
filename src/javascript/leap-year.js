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


    if (input) {
      const year = parseInt(input, 10);
      if (isLeapYear(year)) {
        output.style.opacity = 1;
      }
    }
}
