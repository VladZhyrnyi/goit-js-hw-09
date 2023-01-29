let isActive = false;
let timeoutId;

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.stop.disabled = true;

console.dir(refs.start);
// console.log(refs.stop)

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

function onStartClick(e) {
  if (timeoutId) {
    return;
  }

  timeoutId = setInterval(backgroundChanger, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopClick(e) {
  clearInterval(timeoutId);
  timeoutId = 0;
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function backgroundChanger() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
