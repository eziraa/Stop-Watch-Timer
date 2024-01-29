// Getting UI element

const minuteElm = document.querySelector(".minute");
const secondElm = document.querySelector(".second");
const microSecElem = document.querySelector(".micro-second");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const lapsElm = document.querySelector(".labs");
const lapsItemTitle = document.querySelector(".item-title");
const lapsItemTime = document.querySelector(".lap-time");
let micro_second = 0;
let interval = null;
const startTimer = function () {
  interval = setInterval(updateUi, 10);
  btnStart.disabled = true;
};

const updateUi = function () {
  micro_second++;
  let minute = Math.trunc(micro_second / 100 / 60) % 60;
  let second = Math.trunc(micro_second / 100) % 60;
  let micro_sec = micro_second % 100;

  minuteElm.textContent = minute < 10 ? `0${minute}` : minute;
  secondElm.textContent = second < 10 ? `0${second}` : second;
  microSecElem.textContent = micro_sec < 10 ? `0${micro_sec}` : micro_sec;
};

const stopTimer = function () {
    clearInterval(interval);
    minuteElm.textContent = "00";
    secondElm.textContent = "00";
    microSecElem.textContent = "00";
};

// Adding event listener
btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);