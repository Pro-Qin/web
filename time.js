function countdown() {
    var now = new Date();
    var examDate = new Date("2023-06-25 08:00:00");
    var timeLeft = Math.floor((examDate - now) / 1000);
    var days = Math.floor(timeLeft / (24 * 60 * 60));
    var hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    var seconds = Math.floor(timeLeft % 60);
    // //时间刻
    // var ssss = Math.floor(timeLeft % )
    document.getElementById("days").innerHTML = days + " 天";
    document.getElementById("hours").innerHTML = hours + " 小时";
    document.getElementById("minutes").innerHTML = minutes + " 分钟";
    document.getElementById("seconds").innerHTML = seconds + " 秒";
    // document.getElementById("secondss").innerHTML = ssss + "";
    var timeUnits = document.getElementsByClassName("time-unit");
    for (var i = 0; i < timeUnits.length; i++) {
        if (timeLeft < 6000) {
            timeUnits[i].classList.add("red");
        } else {
            timeUnits[i].classList.remove("red");
        }
    }
}

function showCountdown() {
    countdown();
    document.getElementById("countdown-container").classList.add("show");
}

function showTimeStamp() {
    var currentTime = new Date();
    var timeStamp = currentTime.toLocaleDateString() + " " + currentTime.toLocaleTimeString();
    document.getElementById("time-stamp").innerHTML = "当前时间：" + timeStamp;
}

setInterval(countdown, 1000);

setInterval(showTimeStamp, 1000);

const fullscreenBtn = document.getElementById('fullscreen-btn');
const gradientContainer = document.querySelector('.gradient');

fullscreenBtn.addEventListener('click', function() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    gradientContainer.requestFullscreen();
  }
});