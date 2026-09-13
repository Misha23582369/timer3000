const startbutton = document.getElementById('startbutton');
startbutton.addEventListener("click", starttimer);

let timertime = 0;

function starttimer() {

    const timerinput = document.getElementById('timer-input');
    timertime = timerinput.value * 60;    
    updatescreen();
    setInterval(countdown, 1000);
}

function updatescreen() {
        let hours = Math.floor(timertime / 3600);
    let minutes = Math.floor((timertime % 3600) / 60);
    let seconds = timertime % 60;

    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    if (seconds < 10) { seconds = '0' + seconds; }

    const timerout = document.getElementById('timerout');
    timerout.innerText = hours + ":" + minutes + ":" + seconds;
}


function countdown() {
    if (timertime > 0) {
        timertime = timertime - 1;
        updatescreen();
    }
}т




