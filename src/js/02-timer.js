import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import { Timer } from './timerClass';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minsEl: document.querySelector('[data-minutes]'),
  secsEl: document.querySelector('[data-seconds]'),
};

let targetTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDateInput(selectedDates[0]);
    targetTime = selectedDates[0];
  },
};

const fp = flatpickr(refs.input, options);

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartClick);

function onDateInput(date) {
  const inputedDate = new Date(date).getTime();

  if (inputedDate <= Date.now()) {
    Notiflix.Notify.failure('Please choose date in the future');
    refs.startBtn.disabled = true;
  } else {
    refs.startBtn.disabled = false;
  }
}

function onStartClick(event) {
  refs.startBtn.disabled = true;
  const timer = new Timer(targetTime.getTime());
  timer.start(leftTimeHandler);
}

function leftTimeHandler(ms) {
  if (ms < 0) {
    return;
  }
  const convertedData = convertMs(ms);

  refs.daysEl.textContent = pad(convertedData.days);
  refs.hoursEl.textContent = pad(convertedData.hours);
  refs.minsEl.textContent = pad(convertedData.minutes);
  refs.secsEl.textContent = pad(convertedData.seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(number) {
    return String(number).padStart(2, '0');
}
