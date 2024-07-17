const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.onclick = function (event) {
  let fieldCoords = this.getBoundingClientRect();

  let ballCoords = {
    top: (event.clientY - fieldCoords.top - field.
    clientTop - ball.clientTop / 2),
    left: (event.clientX - fieldCoords.left - field.
    clientLeft - ball.clientWidth / 2),
  }
}