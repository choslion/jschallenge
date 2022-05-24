const todayForm = document.querySelector("#today-form");
const todayList = document.querySelector("#today-list");
const todayInput = document.querySelector("#today-form input");

let todayArray =[];

function setToDo(){
    localStorage.setItem("todayToDo" , JSON.stringify(todayArray));
}

function deleteToday(event){
    const li = event.target.parentElement;
    li.remove();
    todayArray = todayArray.filter(toDo => toDo.id !== parseInt(li.id));
    setToDo();
}


function paintToDay(todayToDo){
    const li = document.createElement("li");
    li.id = todayToDo.id;
    const span = document.createElement("span");
    span.innerText = todayToDo.text;
    const button = document.createElement("button");
    button.innerText = " ✔ ";
    button.addEventListener("click" , deleteToday);
    li.appendChild(span);
    li.appendChild(button);
    todayList.appendChild(li);

}




function todayFunc(event){
    event.preventDefault();
    const todayToDo = todayInput.value;
    todayInput.value = "";
    const todayObj = {
        text: todayToDo,
        id: Date.now(),
      };
    todayArray.push(todayObj);
    paintToDay(todayObj);
    setToDo();
}


todayForm.addEventListener("submit" , todayFunc);

const savedToday = localStorage.getItem("todayToDo");
if(savedToday !== null){
    const parseToday = JSON.parse(savedToday);
    todayArray = parseToday;
    parseToday.forEach(paintToDay);
}