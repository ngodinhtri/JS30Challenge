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
  let secondDeg = second == 0 ? -90 : -90 + 6 * second;
  let minuteDeg = minute == 0 ? -90 : -90 + 6 * minute;
  let hourDeg = hour == 0 ? -90 : -90 + 6 * hour;

  secondElement.style.transform = `rotateZ(${secondDeg}deg) translateY(-50%)`;
  minuteElement.style.transform = `rotateZ(${minuteDeg}deg) translateY(-50%)`;
  hourElement.style.transform = `rotateZ(${hourDeg}deg) translateY(-50%)`;

  //--update
  let minuteFlag = false;
  let hourFlag = false;

  setInterval(() => {
    now = new Date();
    second = now.getSeconds();
    minute = now.getMinutes();

    secondDeg += 6;
    secondElement.style.transform = `rotateZ(${secondDeg}deg) translateY(-50%)`;

    if (second == 59) minuteFlag = true;
    if (minuteFlag && second == 0) {
      minuteDeg += 6;
      minuteElement.style.transform = `rotateZ(${minuteDeg}deg) translateY(-50%)`;
      minuteFlag = false;
    }

    if (minute == 59) hourFlag = true;
    if (hourFlag && minute == 0) {
      hourDeg += 6;
      hourElement.style.transform = `rotateZ(${hourDeg}deg) translateY(-50%)`;
      hourFlag = false;
    }
  }, 1000);
}
