


function displayHour(){
    let hr = document.getElementById("hour");
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let hrRotation = 30*hh + mm/2
    hr.style.transform = `rotate(${hrRotation}deg)`;
}
setInterval(displayHour, 1000);

function displayMints(){
    let mint = document.getElementById("min");
    let date = new Date();
    let mm = date.getMinutes();
    let mRotation = 6 * mm;
    mint.style.transform = `rotate(${mRotation}deg)`;
}
setInterval(displayMints, 1000);

function displaySec(){
    let sec = document.getElementById("sec");
    let date = new Date();
    let ss = date.getSeconds();
    let sRotation = 6 * ss
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displaySec, 1000);