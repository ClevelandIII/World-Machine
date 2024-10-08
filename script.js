//Basic time format from GeeksToGeeks

let now = new Date();
let currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
});

let time = document.getElementById("time");

time.innerHTML = `${currentTime}`;

function setTime() {
    let now = new Date();
    let currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    let time = document.getElementById("time");

    time.innerHTML = `${currentTime}`;
}

setInterval(setTime, 1000);
