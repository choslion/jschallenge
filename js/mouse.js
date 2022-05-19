// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
const superEventHandler = {
  enterfunc: () => {
    title.innerText = "mouse enter!";
    title.style.color = colors[0];
  },
  leavefunc: () => {
    title.innerText = "mouse leave!";
    title.style.color = colors[1];
  },
  resizefunc: () => {
    title.innerText = "resized window!";
    title.style.color = colors[2];
  },
  rightfunc: () => {
    title.innerText = "clicked right button!";
    title.style.color = colors[3];
  }
};
title.addEventListener("mouseenter", superEventHandler.enterfunc);
title.addEventListener("mouseleave", superEventHandler.leavefunc);
window.addEventListener("contextmenu", superEventHandler.rightfunc);
window.addEventListener("resize", superEventHandler.resizefunc);
