const form = document.querySelector("#randomForm");
const choInput = document.querySelector("#choInput");
const guessInput = document.querySelector("#guessInput");
const result = document.querySelector(".result");


function execute(guessNum, ranNum){
if(parseInt(guessNum) === ranNum){   
    result.classList.remove("result");
    result.innerHTML = `You chose ${guessNum} , the machine chose ${ranNum} \n You Won!`;
} else { 
    result.classList.remove("result");
    result.innerHTML = `You chose : ${guessNum} , the machine chose : ${ranNum}\n\ You lost!`;
}
}

function formFunc(event) {
    event.preventDefault();
    const maxInput = choInput.value;
    const guessNum = guessInput.value;
    const ranNum = Math.ceil(Math.random()* maxInput-0.5 );
    execute(guessNum , ranNum);
}

form.addEventListener("submit" , formFunc);