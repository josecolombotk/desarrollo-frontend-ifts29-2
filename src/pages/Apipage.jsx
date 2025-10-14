import { useState, useEffect } from "react";
import "../css/styles.css";

export default function ApiPage() {
  const [weather, setWeather] = useState("Cargando clima...");

  useEffect(() => {
    // Coordenadas de Buenos Aires 
    const lat = -34.61;
    const lon = -58.38;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current_weather) {
          const temp = data.current_weather.temperature;
          const code = data.current_weather.weathercode;
          setWeather(`🌡️ ${temp}°C — ${getWeatherDescription(code)}`);
        } else {
          setWeather("No se pudo obtener el clima.");
        }
      })
      .catch(() => setWeather("Error al conectar con la API del clima."));
  }, []);

  function getWeatherDescription(code) {
    const weatherCodes = {
      0: "Despejado ☀️",
      1: "Mayormente despejado 🌤️",
      2: "Parcialmente nublado ⛅",
      3: "Nublado ☁️",
      45: "Niebla 🌫️",
      48: "Niebla helada 🌫️❄️",
      51: "Llovizna ligera 🌦️",
      61: "Lluvia 🌧️",
      71: "Nieve ❄️",
      95: "Tormenta eléctrica ⛈️"
    };
    return weatherCodes[code] || "Condición desconocida";
  }

  return (
    <div className="api-page container py-5">
      <h1 className="text-center mb-4">Clima actual</h1>
      <div className="weather-widget text-center">{weather}</div>
    </div>
  );
}
