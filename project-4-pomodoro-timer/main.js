const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 10;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // let formattedTime = minutes + ":" + seconds;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timer.innerHTML = formattedTime;
}

function startTimer() {
    // console.log('Start!');
    interval = setInterval(()=>{
        // console.log('test');
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 60;
        }
    }, 1000);
}

function stopTimer() {
    // console.log('Stop.');
    clearInterval(interval);
}

function resetTimer() {
    // console.log('Reset.');
    clearInterval(interval);
    timeLeft = 60;
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
