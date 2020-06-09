
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
  function realTimeClock () {
    var Clock = new Date();

    var hr = Clock.getHours();
    var min = Clock.getMinutes();
    var sec = Clock.getSeconds();

    // Add A.M and P.M system
    var amPm = ( hr <12) ? "A.M" : "P.M";

    // convert the hours component t0 12 format
    hr = (hr > 12) ? hr - 12 : hr;

    // Pad the hrs, min, sec with leading zeros
    hr = ("0" + hr).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    // Display the block
    document.getElementById("clock").innerHTML =
    hr + "  :  "  + min + "  :  "  + sec + " " + amPm;
    var t = setTimeout(realTimeClock, 500);
}

realTimeClock();

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("scroll").style.fontSize = "16px";
    document.getElementById("scroll").style.padding = "25px"
  } else {
    // document.getElementById("scroll").style.fontSize = "24px";
    document.getElementById("scroll").style.padding = "15px"
  }
}

// stripe dropDown

const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


// change background-theme
 changeBgr = () => {
  document.body.style.backgroundColor = "#7CEC9F";
}

changeBgr1 = () => {
  document.body.style.backgroundColor = "#fff";
}

changeBgr2 = () => {
  document.body.style.backgroundColor = "#FD79A8";
}

function themeSetting() {
  var x = document.getElementById("configure");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}