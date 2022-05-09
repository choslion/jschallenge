const lgnForm = document.getElementById("login-form");
const lgnInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");
// const lgnSubmit = document.querySelector("#login-form:last-child");

const HIDENAME = "hide";
const IDKEY = "ID";

function loginSubmit(event) {
    event.preventDefault();
    const username = lgnInput.value;
    lgnInput.value = "";
    lgnForm.classList.add(HIDENAME);
    localStorage.setItem(IDKEY , JSON.stringify(username));
    greeting.innerText = `Hello ${username}\nhave a nice day!`;
    greeting.classList.remove(HIDENAME);
}

const saveUserName = localStorage.getItem(IDKEY);

if(saveUserName === null) {
    lgnForm.classList.remove(HIDENAME);
    lgnForm.addEventListener("submit" , loginSubmit);
} else {
    greeting.innerText = `Hello ${saveUserName} have a nice day!`;
    greeting.classList.remove(HIDENAME);
}




