"use strict";
import { getWeatherIcon } from "/js/helper.js";

const locationButton = document.querySelector("button");
const rain = document.querySelector("#rain");
const noRain = document.querySelector("#noRain");
const error = document.querySelector("#error");
const actually = document.querySelector("#actually");
const hourly = document.querySelector("#hourly");

function clean() {
  rain.classList.add("hidden");
  noRain.classList.add("hidden");
  error.classList.add("hidden");
}
clean();

function showActuallyData(current) {
  // Date
  const date = new Date();
  const now = date.getDate() + "-" + (date.getMonth() + 1);
  const h2 = document.querySelector("#actually h2");
  h2.textContent = now;

  //Degrees
  const p = document.querySelector("#actually p");
  p.textContent = `${Math.round(parseInt(current.temp) - 273.15)}ºC`;
  //icon
  const img = document.querySelector("#actually img");
  img.src = getWeatherIcon(current.weather[0].main);
}

function showHourlyData(hourly) {
  //Date
  const date = new Date();
  const hour = date.getHours();

  const hourCero = document.querySelector("#cero h3");
  hourCero.textContent = hour + 1;

  console.log(hour);
  console.log(hourCero);
}

function removeHidden(square) {
  square.classList.remove("hidden");
}

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
          const finalData = {
            current: data.current,
            hourly: data.hourly.slice(0, 7),
          };
          showActuallyData(finalData.current);
          console.log(finalData);
          showHourlyData();
        } else {
          console.log("No se ha podido acceder a tu ubicación");
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});
