const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const icontoggle = document.querySelector('.icontoggle')
const buttons = document.querySelectorAll('.back')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



function freshmode() {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = '􀆹'
        icontoggle.innerHTML = '􀆹'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = '􀆭'
        icontoggle.innerHTML = '􀆭'
    }
}
icontoggle.addEventListener('click', () => {
    freshmode()
})

// function updateClock() {
//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     const second = now.getSeconds();
//     const millisecond = now.getMilliseconds();
  
//     const hourHand = document.querySelector('.hour');
//     const minuteHand = document.querySelector('.minute');
//     const secondHand = document.querySelector('.second');
  
//     const hourRotation = (hour % 12) / 12 * 360 + minute / 60 * 30 + second / 3600 * 30;
//     const minuteRotation = (minute + second / 60) / 60 * 360;
//     const secondRotation = (second + millisecond / 1000) / 60 * 360;
  
//     hourHand.style.transform = `rotate(${hourRotation}deg)`;
//     minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
//     secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
//     setTimeout(updateClock, 16);
//   }
  
// updateClock();

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

var time_now_server,time_now_client,time_end,time_server_client;

time_end=new Date("2023/01/06 08:00:00");//结束的时间
time_end=time_end.getTime();//获取的是毫秒

time_now_server=new Date();//开始的时间
time_now_server=time_now_server.getTime();
var showtime = function () {
    var nowtime = new Date(),  //获取当前时间
        endtime = new Date("2023/09/01 08:00:00");  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
    return "距离开学还有:"+leftd + "天 " + lefth + "时 " + leftm + "分 " + lefts + "秒";  //返回倒计时的字符串
}

setTimeout("show_time()",1000);

var showfangjiatime = function () {
    var nowtime = new Date(),  //获取当前时间
        endtime = new Date("2023/06/25 00:00:00");  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
    return "距离期末考试还有:"+leftd + "天 " + lefth + "时 " + leftm + "分 " + lefts + "秒";  //返回倒计时的字符串
}

// setTimeout("showfangjiatime()",1000);

// var div = document.getElementById("_d");
var dav = document.getElementById("_f");
setInterval (function () {
    // div.innerHTML = showtime();
    dav.innerHTML = showfangjiatime();
}, 1000);  //反复执行函数本身

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)


document.body.onkeydown = function keyDown(event){  // 方向键控制元素移动函数
    var event = event || window.event;  // 标准化事件对象
    switch(event.keyCode){  // 获取当前按下键盘键的编码
        case 76:
            console.log("press 'L'");
            freshmode()
    }
    return false
}


var circle = document.getElementById("circle");
var circleRadius = circle.offsetWidth / 2; // 获取圆的半径
var button_b = document.getElementById("back");
var button_bb = document.getElementById("iconb");

document.addEventListener("mousemove", function(event) {
  var mouseX = event.clientX; // 获取鼠标x坐标
  var mouseY = event.clientY; // 获取鼠标y坐标

  // 计算圆心的位置
  var circleX = mouseX - circleRadius;
  var circleY = mouseY - circleRadius;

  // 设置圆的位置
  circle.style.left = circleX + "px";
  circle.style.top = circleY + "px";

  // 判断是否与按钮重叠
  var circleRect = circle.getBoundingClientRect();
  var buttonRect = dav.getBoundingClientRect();
  var overlap = !(circleRect.right < buttonRect.left || 
                  circleRect.left > buttonRect.right || 
                  circleRect.bottom < buttonRect.top || 
                  circleRect.top > buttonRect.bottom);

  var buttonRect_ = button_b.getBoundingClientRect();
  var overlap_ = !(circleRect.right < buttonRect_.left || 
                 circleRect.left > buttonRect_.right || 
                 circleRect.bottom < buttonRect_.top || 
                 circleRect.top > buttonRect_.bottom);

  var buttonRect_b = button_bb.getBoundingClientRect();
  var overlap_b = !(circleRect.right < buttonRect_b.left || 
                 circleRect.left > buttonRect_b.right || 
                 circleRect.bottom < buttonRect_b.top || 
                 circleRect.top > buttonRect_b.bottom);

  // 如果重叠则改变圆的颜色
  if (overlap) {
    circle.style.backgroundColor = "rgba(255, 69, 5, 0.3)";
    circle.dark.style.backgroundColor = "rgba(235, 89, 25, 0.3)";
  } else {
    if (overlap_) {
        circle.style.backgroundColor = "rgba(142, 220, 255, 0.3)";
        circle.dark.style.backgroundColor = "rgba(162, 240, 255, 0.3)";
      } else {
        if (overlap_b) {
            circle.style.backgroundColor = "rgba(142, 220, 255, 0.3)";
            circle.dark.style.backgroundColor = "rgba(162, 240, 255, 0.3)";
          } else {
            circle.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
            circle.dark.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          }
      }
  }
});