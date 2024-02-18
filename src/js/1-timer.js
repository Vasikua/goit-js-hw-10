import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

let userSelectedDate; 

const options = {
        altInput: true,
        altFormat: "F j, Y",
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
                            userSelectedDate = userDate;
                            const time = userDate - startDate;
                            const { days, hours, minutes, seconds } = convertMs(time);
                            
                              const showdays = document.querySelector('[data-days]');
                              showdays.textContent = days;

                              const showhours = document.querySelector('[data-hours]');
                              showhours.textContent = hours;

                              const showminutes = document.querySelector('[data-minutes]');
                              showminutes.textContent = minutes;

                              const showseconds = document.querySelector('[data-seconds]');
                              showseconds.textContent = seconds;
              } else {             
                      iziToast.error({
                      fontSize: 'large',
                      close:	false,
                      position:	'topRight',
                      messageColor: 'white',
                      timeout:	2000,
                      backgroundColor: 'red',
                      message:("Please choose a date in the future")
                      });
                }
        }
};
 
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



startBtn.addEventListener('click', startTimer);

function startTimer() {
  
}





// class Timer {
  
//   constructor(onTick) {
//     this.onTick = onTick;
//     this.interval = null;
//    }

//   start() { 
//     const startTime = Date.now();
//     this.interval = setInterval((){
//       const curentTime = Date.now();
//       const delta = curentTime - startTime;
//       const time = this.getTimeCompounents(delta);

//       this.onTick(time);

//     }, 1000)
     
//   }
//   // add 0 on begin if onli one number 
//   Pad(value) {
//     return String(value).padStart(2, '0'); 
//   }

// }


// const timer = new Timer({
//   onTick: updateClockface
// })

// function updateClockface({days, hours, mins,secs }) {
//   updateClockface.textContent = `${days}, ${hours}, ${mins},${secs}`
// }


// getTimeCompounents(time){
//   const hours = this.pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };    
// }



































