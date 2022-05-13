const title = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

function nicoResize() {
    const windowWidth = window.innerWidth
    if(windowWidth <= 300) {
        title.style.backgroundColor = colors[0];
    } else if (windowWidth > 300 && windowWidth<=600 ) {
        title.style.backgroundColor = colors[1];
    } else if (windowWidth > 600 && windowWidth <= 900) {
        title.style.backgroundColor = colors[2];
    } else if (windowWidth > 900 && windowWidth <= 1100) {
        title.style.backgroundColor = colors[3];
    } else if (windowWidth > 1100 && windowWidth <= 1300) {
        title.style.backgroundColor = colors[4];
    } else if (windowWidth > 1300) {
        title.style.backgroundColor = colors[1];
    } 

window.addEventListener("resize" , nicoResize);