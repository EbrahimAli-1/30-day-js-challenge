let secondsArm = document.querySelector(".seconds");
let minutesArm = document.querySelector(".minutes");
let hoursArm = document.querySelector(".hours");

//  Solving Arms Bug
let date = new Date();

let seconds = date.getSeconds();
let secondsDuration = 90 + (seconds / 60) * 360;

let minutes = date.getMinutes();
let minutesDuration = 90 + (minutes / 60) * 360;

let hours = date.getHours();
let hoursDuration = 90 + (hours / 12) * 360;

// Arms Rotating
setInterval(() => {
  secondsDuration += 360 / 60; // The Amount Of Degrees That The SecondHand Turn per Second
  secondsArm.style.transform = `rotate(${secondsDuration}deg)`;

  minutesDuration += 360 / (60 * 60); // The Amount Of Degrees That The ArmHand Turn per Second
  minutesArm.style.transform = `rotate(${minutesDuration}deg)`;

  hoursDuration += 360 / (12 * 60 * 60); // The Amount Of Degrees That The HoursHand Turn per Second
  hoursArm.style.transform = `rotate(${hoursDuration}deg)`;
}, 1000);
