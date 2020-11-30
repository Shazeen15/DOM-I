const digit = document.querySelector(".digits");

const secondTens = document.querySelector(".digits");

const startingTime = 0;
let time = startingTime * 60;

function timer() {
  let seconds = time % 60;
  digit.innerHTML = `${seconds}`;
  time++;
}
