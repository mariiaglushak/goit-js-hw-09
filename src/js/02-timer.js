import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker')

const btnStart = document.querySelector('[data-start]')

let timerId = null;

btnStart.style.padding = "14px";
btnStart.style.fontSize = "20px";
let dateDed = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    clearInterval(timerId);
      document.querySelector('[data-seconds]').textContent ='00';
  document.querySelector('[data-days]').textContent ='00';
  document.querySelector('[data-hours]').textContent ='00';
  document.querySelector('[data-minutes]').textContent ='00';

     dateDed = selectedDates
    console.log(selectedDates[0]);
    if (new Date(selectedDates[0]).getTime() < new Date().getTime()) {
      btnStart.disabled = true
    Notiflix.Notify.failure("Please choose a date in the future");
      // alert("Please choose a date in the future")
    } else {
      Notiflix.Notify.success('The date is selected');
    btnStart.disabled = false;
  }
  },
};

flatpickr(input, options);

function addLeadingZero(value) {
  const { days, hours, minutes, seconds } = value

  document.querySelector('[data-seconds]').textContent = seconds.toString().padStart(2, '0');
  if (days ===0 && hours ===0 && minutes === 0 && seconds === 0) {
    clearInterval(timerId);
  } else {
  document.querySelector('[data-days]').textContent = days.toString().padStart(2, '0');
  document.querySelector('[data-hours]').textContent = hours.toString().padStart(2, '0');
  document.querySelector('[data-minutes]').textContent = minutes.toString().padStart(2, '0');
}
 
}

function convertMs(ms) {
  ///////////////////////
     new Date(timerDates);
  dateDed = new Date(dateDed).getTime();
  const nowData = new Date().getTime();
  let diffTime = dateDed - nowData;
  ms = diffTime;
  ////////////////////////
  if (diffTime>0) {
        const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // console.log({ days, hours, minutes, seconds })
  addLeadingZero({ days, hours, minutes, seconds })
      return { days, hours, minutes, seconds };
    } else {
      // Number of milliseconds per unit of time
  clearInterval(timerId);
    }  }

const timerDates = input.value
console.log(timerDates)

function clickHendler(e) {
    clearInterval(timerId);
 
  timerId = setInterval(convertMs,1000);
}

btnStart.addEventListener('click',clickHendler)






