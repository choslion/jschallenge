const form = document.querySelector("#randomForm");
const choseInput = document.querySelector("#choseInput");
const guessInput = document.querySelector("#guessInput");
const result = document.querySelector(".result");

function execute(guessNum, randomNum) {
  if (parseInt(guessNum) === randomNum) {
    result.classList.remove("result");
    result.innerHTML = `You chose :${guessNum}, the machine chose : ${randomNum} You won!`;
  } else {
    result.classList.remove("result");
    result.innerHTML = `You chose :${guessNum}, the machine chose : ${randomNum} You lost!`;
  }
}

function formFunc(event) {
  event.preventDefault();
  const maxInput = choseInput.value;
  const guessNum = guessInput.value;
  const randomNum = Math.ceil(Math.random() * maxInput - 0.5);
  execute(guessNum, randomNum);
}

form.addEventListener("submit", formFunc);