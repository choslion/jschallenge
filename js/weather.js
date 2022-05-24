const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "667ff4bb1062299e17547a22e558d81e";

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C `;
    });
}

function geoBye(){
    alert("위치정보를 허용해주세요.")
}


navigator.geolocation.getCurrentPosition(geoOk, geoBye);
