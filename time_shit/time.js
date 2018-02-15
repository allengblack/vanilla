let time = 0;
let hotSpot = document.getElementById('hot');
let timeSpan = document.getElementById("time-zone");
let interval = undefined;

hotSpot.addEventListener("mouseenter", incrementTime);
hotSpot.addEventListener("mouseleave", stopIncrement);

function incrementTime() {
    interval = setInterval(() => {
         time++;
         changeTIme();
    }, 1000);
}

function stopIncrement() {
    clearInterval(interval);
}

function changeTIme() {
    timeSpan.innerHTML = time;
}