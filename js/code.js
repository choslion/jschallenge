function nowDay(){

    const christMas = document.querySelector("#christMas");
    const dDate = new Date(2022,12,25);
    const date = new Date();
    const mas = dDate - date
    const days = Math.floor(mas / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((mas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((mas % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((mas % (1000 * 60)) / 1000)).padStart(2, "0");
    christMas.innerText = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 `;

}



nowDay();
setInterval(nowDay , 1000);