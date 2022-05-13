const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");

const superEventHandler = {
    enterfunc : ()=> {
        title.innerText = "mouse enter!";
        title.style.color = colors[0];
      } ,
    leavefunc : () => {
        title.innerText = "mouse leave!";
        title.style.color = colors[1];
    } ,
    resizefunc : function() {
        title.innerText = "resized window!";
        title.style.color = colors[2];
    } ,
    rightfunc : function () {
        title.innerText = "clicked right button!";
        title.style.color = colors[3];
    }
};
title.addEventListener("mouseenter", superEventHandler.enterfunc);
title.addEventListener("mouseleave", superEventHandler.leavefunc);
window.addEventListener("contextmenu", superEventHandler.rightfunc);
window.addEventListener("resize" , superEventHandler.resizefunc);