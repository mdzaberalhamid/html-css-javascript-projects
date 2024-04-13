const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

function startTimer() {
    console.log('Start!');
}

function stopTimer() {
    console.log('Stop.');
}

function resetTimer() {
    console.log('Reset.');
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);