"use strict";

const locationButton = document.querySelector("button");
const rain = document.querySelector(".rain");
const noRain = document.querySelector(".noRain");

locationButton.addEventListener("click", async () => {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=16ce9a4a05f095cfc0c771f280038c39`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          const currentTemperature = current.main.temp;
          const currentWeather = Math.round(current.weather[0].main);
        } else {
          console.log("No se ha podido acceder a tu ubicación");
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

/* if (hourly.weather.main !== "Rain") {
  console.log("No va a llover.");
} else {
  console.log("Sí va a llover.");
} */

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=16ce9a4a05f095cfc0c771f280038c39`;
