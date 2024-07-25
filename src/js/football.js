// script.js
document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('field');
  const ball = document.getElementById('ball');

  if (!field || !ball) {
    console.error('Field or ball element not found');
    return;
  }

  field.addEventListener('click', (event) => {
    const fieldCoords = field.getBoundingClientRect();
    const ballSize = ball.getBoundingClientRect().width; // Припускаємо, що м'яч квадратний

    const ballCoords = {
      top: event.clientY - fieldCoords.top - ballSize / 2,
      left: event.clientX - fieldCoords.left - ballSize / 2,
    };

    // Обмеження, щоб м'яч не виходив за межі поля
    const maxX = field.clientWidth - ballSize;
    const maxY = field.clientHeight - ballSize;

    ball.style.transform = `translate(${Math.min(maxX, Math.max(0, ballCoords.left))}px, ${Math.min(maxY, Math.max(0, ballCoords.top))}px)`;
  });
});
