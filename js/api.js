"use strict";

const locationButton = document.querySelector("button");

locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=16ce9a4a05f095cfc0c771f280038c39`;
      console.log(url);
    });
  }
});
