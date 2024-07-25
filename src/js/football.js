const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', (event) => {
  const ballSize = 20;
  const ballX = event.clientX - ballSize / 2;
  const ballY = event.clientY - ballSize / 2;

  const maxX = field.clientWidth - ballSize;
  const maxY = field.clientHeight - ballSize;

  ball.style.left = `${Math.min(maxX, Math.max(0, ballX))}px`;
  ball.style.top = `${Math.min(maxY, Math.max(0, ballY))}px`;
});

const ball = document.querySelector('.ball');

ball.onmousedown = function (event) {
  // Підготовка до переміщення
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };
};
