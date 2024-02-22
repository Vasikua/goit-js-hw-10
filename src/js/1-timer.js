import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

  const showDays = document.querySelector('[data-days]');
  const showHours = document.querySelector('[data-hours]');
  const showMinutes = document.querySelector('[data-minutes]');
  const showSeconds = document.querySelector('[data-seconds]');
  const inputfield = document.querySelector('#datetime-picker');
  const startBtn = document.querySelector('[data-start]');
  
startBtn.disabled = true;
let delta = 0; 
let intervalId;

const options = {
  dateFormat: "Y-m-d",
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
        
  onClose(selectedDates) {
    const userDate = new Date(selectedDates[0]).getTime();
    const startDate = Date.now();
              
    if (userDate > startDate) {
      startBtn.disabled = false;
      delta = userDate - startDate;
      updateClockface(convertMs(delta));
      startTimer();
    
                
    } else {
      iziToast.error({
        fontSize: 'large',
        close: false,
        position: 'topRight',
        messageColor: 'white',
        timeout: 2000,
        backgroundColor: 'red',
        message: ("Please choose a date in the future")
      });
    }
  }
};          

function updateClockface({ days, hours, minutes, seconds }) {
  showDays.textContent = `${days}`;
  showHours.textContent = `${hours}`;
  showMinutes.textContent = `${minutes}`;
  showSeconds.textContent = `${seconds}`;
}

function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(timer, 1000);
}

function timer() {
  if (delta > 0) {
    delta -= 1000;
    updateClockface(convertMs(delta))
  }
  else {
    clearInterval(intervalId);
  }
}
 
flatpickr('#datetime-picker', options);

function convertMs(time) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  // Remaining days
  const days = Math.floor(time / day);
  // Remaining hours
  const hours = Math.floor((time % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((time % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((time % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {
  
  startBtn.disabled = true;
  inputfield.disabled = true;
  startTimer();
});
