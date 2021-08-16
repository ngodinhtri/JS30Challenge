const secondElement = document.querySelector(".clock__second");
const minuteElement = document.querySelector(".clock__minute");
const hourElement = document.querySelector(".clock__hour");

start();

function start() {
  //--Show the current time
  let now = new Date();
  let second = now.getSeconds();
  let minute = now.getMinutes();
  let hour = now.getHours();
  // 0 => -90ᴼ | 15 => 0ᴼ | 30 => 90ᴼ | 45 => 180ᴼ
  let secondDeg = second == 0 ? -90 : -90 + (second / 60) * 360;
  let minuteDeg =
    minute == 0 ? -90 : -90 + (minute / 60) * 360 + (second / 60) * 6;
  //12h => 360ᴼ
  let hourDeg = hour == 0 ? -90 : -90 + (hour / 12) * 360 + (minute / 60) * 30;
  console.log(hourDeg);

  secondElement.style.transform = `translateY(-50%) rotateZ(${secondDeg}deg)`;
  minuteElement.style.transform = `translateY(-50%) rotateZ(${minuteDeg}deg)`;
  hourElement.style.transform = `translateY(-50%) rotateZ(${hourDeg}deg)`;

  //--update
  setInterval(() => {
    now = new Date();
    second = now.getSeconds();
    minute = now.getMinutes();

    secondDeg += 6;
    secondElement.style.transform = `translateY(-50%) rotateZ(${secondDeg}deg)`;

    minuteDeg += (1 / 60) * 6;
    minuteElement.style.transform = `translateY(-50%) rotateZ(${minuteDeg}deg)`;

    hourDeg += (1 / 3600) * 30;
    hourElement.style.transform = `translateY(-50%) rotateZ(${hourDeg}deg)`;
  }, 1000);
}
