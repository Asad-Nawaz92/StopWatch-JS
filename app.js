var minutes = 0;
var seconds = 0;
var miliSeconds = 0;

var getMins = document.getElementById("min");
var getSecs = document.getElementById("sec");
var getMilisecs = document.getElementById("ms");

getMins.innerHTML = "00";
getSecs.innerHTML = "00";
getMilisecs.innerHTML = "00";

var interval;

function start() {
  interval = setInterval(function () {
    miliSeconds++;
    getMilisecs.innerHTML = miliSeconds;
    if (miliSeconds >= 100) {
      seconds++;
      miliSeconds = 0;
    } else if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    var formattedMins = minutes < 10 ? "0" + minutes : minutes;
    var formattedSecs = seconds < 10 ? "0" + seconds : seconds;
    var formattedMiliSecs = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds;

    getMins.innerHTML = formattedMins;
    getSecs.innerHTML = formattedSecs;
    getMilisecs.innerHTML = formattedMiliSecs;
  }, 10);
  document.getElementById("disabled").disabled = true;
}

function pause() {
  clearInterval(interval);
  document.getElementById("disabled").disabled = false;
}

function reset() {
  minutes = '0';
  seconds = '0';
  miliSeconds = '0';

  clearInterval(interval);

  getMins.innerHTML = '00';
  getSecs.innerHTML = '00';
  getMilisecs.innerHTML = '00';
  document.getElementById("disabled").disabled = false;
}
