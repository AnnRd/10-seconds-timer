//Timer block

const hourElement = document.querySelector('.hours');
const minuteElement = document.querySelector('.minutes');
const secondElement = document.querySelector('.seconds');
const millisecondElement = document.querySelector('.milliseconds');

//Buttons

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const newButton = document.querySelector('.new');

//Variables

let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;
let counter = 0;
let disabled = true;

//Listeners

start.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
})

pause.addEventListener('click', () => {
  clearInterval(interval);
})

stop.addEventListener('click', () => {
  clearInterval(interval);
  clearTimer();
  disableButton();
})

newButton.addEventListener('click', () => {
  clearInterval(interval);
  counter++;
  const results = document.querySelector('.results');
  const newResult = document.createElement('div');

  newResult.classList.add('newResult__style');
  newResult.innerText = `Your ${counter} result: ${hours}:${minutes}:${seconds}:${milliseconds}`
  results.append(newResult);

  clearTimer();
  interval = setInterval(startTimer, 10);
})

//Functions

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

  newButton.disabled = false;
}

function clearTimer(){
  hours = 00;
  minutes = 00;
  seconds = 00;
  milliseconds = 00;
  hourElement.innerText = '00'
  minuteElement.innerText = '00'
  secondElement.innerText = '00'
  millisecondElement.innerText = '00'
}

function disableButton(){
  if(disabled){
    newButton.disabled = true;
  }
}
disableButton();
