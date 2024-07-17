document.addEventListener('DOMContentLoaded', function () {
  const switchElement = document.querySelector('.switch');
  
  switchElement.addEventListener('click', function () {
    const isOn = switchElement.classList.toggle('on');
    
    if (isOn) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  });
  
  // Ініціалізувати початковий стан
  document.body.classList.add('light-mode');
});