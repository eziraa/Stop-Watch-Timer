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
const startTimer = function () {
  setInterval(updateUi, 10);
};

btnStart.addEventListener("click", startTimer);
