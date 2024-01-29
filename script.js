// Getting UI element

const minuteElm = document.querySelector(".minute");
const secondElm = document.querySelector(".second");
const microSecElem = document.querySelector(".micro-second");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const lapsElm = document.querySelector(".laps");
const lapsItemTitle = document.querySelector(".item-title");
const lapsItemTime = document.querySelector(".lap-time");
let micro_second = 0;
let interval = null;
const laps = [];
const startTimer = function () {
  interval = setInterval(updateUi, 10);
  btnStart.removeEventListener("click", startTimer);
  btnStop.addEventListener("click", stopTimer);
  //   btnStart.removeEventListener(start);
};

// To update the timer ui when it trigger click on start btn
const updateUi = function () {
  micro_second++;
  let minute = Math.trunc(micro_second / 100 / 60) % 60;
  let second = Math.trunc(micro_second / 100) % 60;
  let micro_sec = micro_second % 100;

  minuteElm.textContent = minute < 10 ? `0${minute}` : minute;
  secondElm.textContent = second < 10 ? `0${second}` : second;
  microSecElem.textContent = micro_sec < 10 ? `0${micro_sec}` : micro_sec;
};

// Stop timer method
const stopTimer = function () {
  // remove interval
  clearInterval(interval);
  // adding lap object to laps array
  addLap();

  // clrear time elemnts textfield
  minuteElm.textContent = "00";
  secondElm.textContent = "00";
  microSecElem.textContent = "00";

  // Displaying lab objects
  displayLap();
    btnStart.addEventListener("click", startTimer);
    btnStop.removeEventListener("click", stopTimer);
};

// adding lap object to laps array

const addLap = function () {
  const lap = {
    minute: minuteElm.textContent,
    second: secondElm.textContent,
    micro_second: microSecElem.textContent,
  };
  laps.push(lap);
};

// To display laps list when it trigger a  click event on stop btn
const displayLap = function () {
  lapsElm.textContent = "";
  laps.forEach((lap, i) => {
    const html = `<div class="lap-item">
            <span class="item-title"> Lap ${i + 1}:</span>
            <span class="lap-time"> ${lap.minute}:${lap.second}:${
      lap.micro_second
    }</span>
          </div> `;
    lapsElm.insertAdjacentHTML("afterbegin", html);
  });
};
// Adding event listener
btnStart.addEventListener("click", startTimer);
