
/*


Short and simple:

new Date().toLocaleTimeString(); // 11:18:48 AM
//---
new Date().toLocaleDateString(); // 11/16/2015
//---
new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

*/

// source for below code: https://www.youtube.com/watch?v=C2CrBlGvbEM
window.onload = function realTimeClock () {
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

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scroll").style.fontSize = "16px";
    document.getElementById("scroll").style.padding = "20px"
  } else {
    document.getElementById("scroll").style.fontSize = "24px";
    document.getElementById("scroll").style.padding = "30px"
  }
}