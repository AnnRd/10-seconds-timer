//Timer block

const hourElement = document.querySelector('.hours');
const minuteElement = document.querySelector('.minutes');
const secondElement = document.querySelector('.seconds');
const millisecondElement = document.querySelector('.milliseconds');

//Buttons

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');

//Variables

let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;

//Listeners

start.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
})



function startTimer(){
  milliseconds++;

  //Milliseconds
  if(milliseconds < 9){
    millisecondElement.innerText = '0' + milliseconds;
  }

  if(milliseconds > 9){
    millisecondElement.innerText = milliseconds;
  }

  if(milliseconds > 99){
    seconds++;
    secondElement.innerText = '0' + seconds;
    milliseconds = 0;
    millisecondElement.innerText = '0' + milliseconds;
  }

  //Seconds
  if(seconds < 9){
    secondElement.innerText = '0' + seconds;
  }

  if(seconds > 9){
    secondElement.innerText = seconds;
  }

  if(seconds > 59){
    minutes++;
    minuteElement.innerText = '0' + minutes;
    seconds = 0;
    secondElement.innerText = '0' + seconds;
  }

  //Minutes
  if(minutes < 9){
    minuteElement.innerText = '0' + minutes;
  }

  if(minutes > 9){
    minuteElement.innerText = minutes;
  }

  if(minutes > 59){
    hours++;
    hourElement.innerText = '0' + hours;
    minutes = 0;
    minuteElement.innerText = '0' + minutes;
  }

  //Hours
  if(hours > 9){
    hourElement.innerText = hours;
  }
}
