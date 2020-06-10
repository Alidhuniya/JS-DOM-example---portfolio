/*


Short and simple:

new Date().toLocaleTimeString(); // 11:18:48 AM
//---
new Date().toLocaleDateString(); // 11/16/2015
//---
new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

*/

// loader
var myVar;

function screenLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// source for below code: https://www.youtube.com/watch?v=C2CrBlGvbEM
function realTimeClock() {
  var Clock = new Date();

  var hr = Clock.getHours();
  var min = Clock.getMinutes();
  var sec = Clock.getSeconds();

  // Add A.M and P.M system
  var amPm = hr < 12 ? "A.M" : "P.M";

  // convert the hours component t0 12 format
  hr = hr > 12 ? hr - 12 : hr;

  // Pad the hrs, min, sec with leading zeros
  hr = ("0" + hr).slice(-2);
  min = ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

  // Display the block
  document.getElementById("clock").innerHTML =
    hr + "  :  " + min + "  :  " + sec + " " + amPm;
  var t = setTimeout(realTimeClock, 500);
}

realTimeClock();

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("scroll").style.fontSize = "16px";
    document.getElementById("scroll").style.padding = "25px";
  } else {
    // document.getElementById("scroll").style.fontSize = "24px";
    document.getElementById("scroll").style.padding = "15px";
  }
}

// stripe dropDown

const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);

// change background-theme
themeSetting = () => {
  var x = document.getElementById("configure");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

changeBgr = () => {
  document.body.style.backgroundColor = "#7CEC9F";
};

changeBgr1 = () => {
  document.body.style.backgroundColor = "#fff";
};

changeBgr2 = () => {
  document.body.style.backgroundColor = "#FD79A8";
};

// Name type Writer

class TypeWriter {
  constructor(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 5);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      this.wordIndex++;

      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}

// Image Slider

var images = [
  "./img/ecommerce.png",
  "./img/construction.png",
  "./img/digital.png",
];

let num = 0;

function next() {
  let slider = document.getElementById("slider");

  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

let go = setInterval(next, 1500);

function prev() {
  let slider = document.getElementById("slider");

  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

// pause slider on hover
function stopShow() {
  clearInterval(go);
}

// html 5 video player

//ELEMENT SELECTORS
var player = document.querySelector(".player");
var video = document.querySelector("#video");
var playBtn = document.querySelector(".play-btn");
var volumeBtn = document.querySelector(".volume-btn");
var volumeSlider = document.querySelector(".volume-slider");
var volumeFill = document.querySelector(".volume-filled");
var progressSlider = document.querySelector(".progress");
var progressFill = document.querySelector(".progress-filled");
var textCurrent = document.querySelector(".time-current");
var textTotal = document.querySelector(".time-total");
var speedBtns = document.querySelectorAll(".speed-item");
var fullscreenBtn = document.querySelector(".fullscreen");

//GLOBAL VARS
let lastVolume = 1;
let isMouseDown = false;

//PLAYER FUNCTIONS
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.classList.toggle("paused");
}
function togglePlayBtn() {
  playBtn.classList.toggle("playing");
}

function toggleMute() {
  if (video.volume) {
    lastVolume = video.volume;
    video.volume = 0;
    volumeBtn.classList.add("muted");
    volumeFill.style.width = 0;
  } else {
    video.volume = lastVolume;
    volumeBtn.classList.remove("muted");
    volumeFill.style.width = `${lastVolume * 100}%`;
  }
}
function changeVolume(e) {
  volumeBtn.classList.remove("muted");
  let volume = e.offsetX / volumeSlider.offsetWidth;
  volume < 0.1 ? (volume = 0) : (volume = volume);
  volumeFill.style.width = `${volume * 100}%`;
  video.volume = volume;
  if (volume > 0.7) {
    volumeBtn.classList.add("loud");
  } else if (volume < 0.7 && volume > 0) {
    volumeBtn.classList.remove("loud");
  } else if (volume == 0) {
    volumeBtn.classList.add("muted");
  }
  lastVolume = volume;
}
function neatTime(time) {
  // var hours = Math.floor((time % 86400)/3600)
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}
function updateProgress(e) {
  progressFill.style.width = `${(video.currentTime / video.duration) * 100}%`;
  textCurrent.innerHTML = `${neatTime(video.currentTime)} / ${neatTime(
    video.duration
  )}`;
  // textTotal.innerHTML = neatTime(video.duration);
  // console.log(progressFill.style.width);
}
function setProgress(e) {
  const newTime = e.offsetX / progressSlider.offsetWidth;
  progressFill.style.width = `${newTime * 100}%`;
  video.currentTime = newTime * video.duration;
}
function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
var fullscreen = false;
function toggleFullscreen() {
  fullscreen ? exitFullscreen() : launchIntoFullscreen(player);
  fullscreen = !fullscreen;
}
function setSpeed(e) {
  console.log(parseFloat(this.dataset.speed));
  video.playbackRate = this.dataset.speed;
  speedBtns.forEach((speedBtn) => speedBtn.classList.remove("active"));
  this.classList.add("active");
}
function handleKeypress(e) {
  switch (e.key) {
    case " ":
      togglePlay();
    case "ArrowRight":
      video.currentTime += 5;
    case "ArrowLeft":
      video.currentTime -= 5;
    default:
      return;
  }
}
//EVENT LISTENERS
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", togglePlayBtn);
video.addEventListener("pause", togglePlayBtn);
video.addEventListener("ended", togglePlayBtn);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);
volumeBtn.addEventListener("click", toggleMute);
window.addEventListener("mousedown", () => (isMouseDown = true));
window.addEventListener("mouseup", () => (isMouseDown = false));
// volumeSlider.addEventListener('mouseover', changeVolume);
volumeSlider.addEventListener("click", changeVolume);
progressSlider.addEventListener("click", setProgress);
fullscreenBtn.addEventListener("click", toggleFullscreen);
speedBtns.forEach((speedBtn) => {
  speedBtn.addEventListener("click", setSpeed);
});
window.addEventListener("keydown", handleKeypress);

// faq

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
