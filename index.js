/*jshint esversion:6*/

let changeColorButton, backgroundChange;
let dayContainer, timeContainer;
let changeFontButton, fontChanged;
let change;
let Clock;




window.onload = function () {
  init();
  changeBackgroundColor();
  dayContainer = document.querySelector('#dayContainer');
  timeContainer = document.querySelector('#timeContainer');
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeFontButton = document.querySelector('#change-text-font');
  changeFontButton.addEventListener('click', changeTextFont);
  fontChanged = 0; Clock = 0;

};


function init() {
  startClock();
}
function startClock() {
  updateClock();
  window.setInterval(function () {
    updateClock();
  }, 500);
}


function updateClock() {
  if (Clock == 0) {
    const date = new Date();
    dayContainer = document.querySelector('#dayContainer');
    let day;
    function getDay() {
      switch (new Date().getDay()) {
        case 0:
          day = "pühapäev";
          break;
        case 1:
          day = "esmaspäev";
          break;
        case 2:
          day = "teisipäev";
          break;
        case 3:
          day = "kolmapäev";
          break;
        case 4:
          day = "neljapäev";
          break;
        case 5:
          day = "reede";
          break;
        case 6:
          day = "laupäev";
          break;
      }
    }
    getDay();
    let month = new Array();
    month[0] = "jaanuar";
    month[1] = "veebruar";
    month[2] = "märts";
    month[3] = "aprill";
    month[4] = "mai";
    month[5] = "juuni";
    month[6] = "juuli";
    month[7] = "august";
    month[8] = "september";
    month[9] = "oktoober";
    month[10] = "november";
    month[11] = "detsember";
    let n = month[date.getMonth()];
    let a = date.getDate();
    dayContainer.innerHTML = day + ", " + a + ". " + n;

    let time = document.querySelector('#timeContainer');
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());
    time.innerHTML = h + "|" + m + "|"+ s ;
  } else {
    return;
  }
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function changeBackgroundColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function changeColor(colorValue) {
  document.body.style.backgroundColor = colorValue;
}

function changeTextColor(colorValue) {
  dayContainer.style.color = colorValue;
  timeContainer.style.color = colorValue;
}

function changeTextFont() {
  if (fontChanged == 0) {
    dayContainer.style.fontFamily = "Arial";
    timeContainer.style.fontFamily = "Arial";
    fontChanged = 1;

  } else {
    dayContainer.style.fontFamily = "Calibri";
    timeContainer.style.fontFamily = "Calibri";
    fontChanged = 0;

  }
}

function Song1() {
  document.getElementById('mysong').src = "day.mp3";
}

function Song2() {
  document.getElementById('mysong').src = "kemo.mp3";
}