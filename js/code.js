const form = document.querySelector("#randomForm");
const choInput = document.querySelector("#choInput");
const guessInput = document.querySelector("#guessInput");
const playBtn = document.querySelector("#playBtn");
const result = document.querySelector(".result");

function excute(guessNum , maxInput){

if(guessNum === parseInt(maxInput)){   
    result.classList.remove("result");
    const ranNum = Math.floor(Math.random()) * maxInput + 1;
    result.innerHTML = `You chose ${guessNum} , the machine chose ${ranNum} \nYou Won!`;
} else if (guessNum !== parseInt(maxInput)){ 
    result.classList.remove("result");
    result.innerHTML = `You chose ${guessNum} , the machine chose ${ranNum}\nYou lost!`;
}
}

function formFunc(event) {
    event.preventDefault();
    const guessNum = guessInput.value;
    const maxInput = choInput.value;
    execute(guessNum , maxInput);
}

form.addEventListener("submit" , formFunc);