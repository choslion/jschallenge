const form = document.querySelector("#login-form");
const loginput = document.querySelector("#login-form input:first-child");
const h1 = document.querySelector("#greeting");



function formFunc(e){
    e.preventDefault();
    const username = loginput.value;
    form.classList.add("hidden")
    localStorage.setItem("username" , username );
    h1.classList.remove("hidden");
    h1.innerText = `Hello ${username}!\nhave a nice day!`
}

const savedUserName = localStorage.getItem("username");

if(savedUserName === null){
    form.classList.remove("hidden");
    form.addEventListener("submit" , formFunc);
} else {
    h1.classList.remove("hidden");
    h1.innerText = `Hello ${savedUserName}!\nhave a nice day!`
}
