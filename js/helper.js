export const getWeatherIcon = (clima) => {
  if (clima === "Clear") return "/iconos/animated/day.svg";
  if (clima === "Thunderstorm") return "iconos/animated/thunder.svg";
  if (clima === "Drizzle") return "iconos/animated/weather.svg";
  if (clima === "Rain") return "iconos/animated/rainy-5.svg";
  if (clima === "Snow") return "iconos/animated/snowy-6.svg";
  if (clima === "Clouds") return "iconos/animated/cloudy.svg";
};

export const getMonthDay = (month) => {
  if (month === 1) return "Enero";
  if (month === 2) return "Febrero";
  if (month === 3) return "Marzo";
  if (month === 4) return "Abril";
  if (month === 5) return "Mayo";
  if (month === 6) return "Junio";
  if (month === 7) return "Julio";
  if (month === 8) return "Agosto";
  if (month === 9) return "Septiembre";
  if (month === 10) return "Octubre";
  if (month === 11) return "Noviembre";
  if (month === 12) return "Diciembre";
};
