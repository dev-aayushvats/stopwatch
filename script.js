let hours = 0;
let mins = 0;
let secs = 0;

const watch = document.querySelector(".watch");
let timer;
const start = () => {
    {
        timer = setInterval(() => {
            secs++;
            if (secs > 59) {
                mins++;
                secs = 0;
            }
            if (mins > 59) {
                hours++;
                mins = 0;
            }
            watch.innerHTML = hours.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }) + ":" + mins.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }) + ":" + secs.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }, 1000)
    }
}
const stop = () => {
    clearInterval(timer);
}
const reset = () => {
    clearInterval(timer);
    watch.innerHTML = "00:00:00"
    hours = 0;
    mins = 0;
    secs = 0;
}