// Variable
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
const displayTimer = document.querySelector("#timer");

// Variables for setInterval && timerStatus

let timerInterval = null;
let timerStatus = "stopped";

// Variables for time value

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stop Function

function stopWatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  leadingSeconds = seconds < 10 ? "0" + seconds.toString() : seconds;
  leadingMinutes = minutes < 10 ? "0" + minutes.toString() : minutes;
  leadingHours = hours < 10 ? "0" + hours.toString() : hours;

  displayTimer.innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 100);

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById(
    "startStopBtn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});
