'use strict'


const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");
const laps = document.querySelector(".js-laps");

class Stopwatch {
  constructor({ onTick }) {
    this.startTime = null;
    this.deltaTime = null;
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  startTimer() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now() - this.deltaTime;
      this.timerId = setInterval(() => {
        this.deltaTime = Date.now() - this.startTime;
        this.onTick(this.deltaTime);
      }, 100);
    }
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.isActive = false;
    this.timerId = null;
  }

  resetTimer() {
    this.stopTimer()
    this.startTime = null;
    this.deltaTime = 0;
    this.onTick(this.deltaTime);
  }
}

const stopwatch = new Stopwatch({onTick: updateClockface});

startBtn.addEventListener('click', () => {
  if (!stopwatch.isActive) {
    stopwatch.startTimer()
    startBtn.textContent = 'Pause';
    setActiveBtn(startBtn);
    return;
  }

  stopwatch.stopTimer()
  startBtn.textContent = 'Continue';
});

lapBtn.addEventListener('click', () => {
  const arr = [];
  const lapTime = clockface.textContent;
  arr.push(lapTime);
  let elem = document.createElement('li');
  elem.classList.add('js-laps-item');
  elem.textContent = arr;
  laps.appendChild(elem);
  setActiveBtn(lapBtn);
});

resetBtn.addEventListener('click', () => {
  stopwatch.resetTimer();
  startBtn.textContent = 'Start';
  setActiveBtn(resetBtn);
});

function updateClockface(time) {
  stopwatch.isActive ? clockface.textContent = getFormattedTime(time) : clockface.textContent = '00:00.0';
}

function getFormattedTime(time) {
  const date = new Date(time);
  let min = date.getMinutes();
  let sec = date.getSeconds();
  const ms = Number.parseInt(date.getMilliseconds() / 100);
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  return `${min}:${sec}.${ms}`;
}

function setActiveBtn(target) {
  if (target.classList.contains('active')) {
    return;
  }

  startBtn.classList.remove('active');
  lapBtn.classList.remove('active');
  resetBtn.classList.remove('active');

  target.classList.add('active');
}
