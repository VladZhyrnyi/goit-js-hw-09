import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.dir(selectedDates[0].toTimeString());
  },
};


const refs = {
    input: document.getElementById('datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minsEl: document.querySelector('[data-minutes]'),
    secsEl: document.querySelector('[data-seconds]')
}

const fp = flatpickr(refs.input, options);

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.log(fp.selectedDates[0].getDate())
}