document.addEventListener('DOMContentLoaded', function () {
  const switchElement = document.querySelector('.switch');
  const body = document.body;
  const logoStroke = document.querySelectorAll('.logo-stroke');
  const logoFill = document.querySelectorAll('.logo-fill');

  switchElement.addEventListener('click', function () {
    const isOn = switchElement.classList.toggle('on');

    if (isOn) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      body.classList.add("dark-mode_hover")
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      body.classList.remove("dark-mode_hover")
    }

    logoStroke.forEach(stroke => {
      stroke.setAttribute('stroke', isOn ? 'white' : 'black');
    });

    logoFill.forEach(fill => {
      fill.setAttribute('fill', isOn ? 'white' : 'black');
    });
  });

  body.classList.add('light-mode');
}); 