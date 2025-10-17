import { useState, useEffect } from "react";
import "../css/apipage.css";
import { usePageMetadata } from "../hooks/usePageMetadata";
import favicon from "../assets/favicon.png";

export default function ApiPage() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const developers = [
    { name: "Jose", city: "Rafaela", province: "Santa Fe", lat: -31.25, lon: -61.49 },
    { name: "Victoria", city: "Lanús", province: "Buenos Aires", lat: -34.70, lon: -58.39 },
    { name: "Estiven", city: "Tigre", province: "Buenos Aires", lat: -34.43, lon: -58.58 },
    { name: "Lucas", city: "Devoto", province: "Buenos Aires", lat: -34.63, lon: -58.52 },
    { name: "Sebastian", city: "Mendoza", province: "Mendoza", lat: -32.89, lon: -68.83 }
  ];

  usePageMetadata("Equipo Innovador - Nuestros Climas", favicon);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const promises = developers.map(dev =>
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dev.lat}&longitude=${dev.lon}&current_weather=true`)
            .then(res => res.json())
            .then(data => ({
              ...dev,
              temp: data.current_weather.temperature,
              code: data.current_weather.weathercode,
              windSpeed: data.current_weather.windspeed
            }))
        );

        const results = await Promise.all(promises);
        setWeatherData(results);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el clima:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  function getWeatherDescription(code) {
    const weatherCodes = {
      0: "Despejado",
      1: "Mayormente despejado",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Niebla",
      48: "Niebla helada",
      51: "Llovizna ligera",
      53: "Llovizna moderada",
      55: "Llovizna intensa",
      61: "Lluvia ligera",
      63: "Lluvia moderada",
      65: "Lluvia intensa",
      71: "Nieve ligera",
      73: "Nieve moderada",
      75: "Nieve intensa",
      95: "Tormenta eléctrica"
    };
    return weatherCodes[code] || "Condición desconocida";
  }

  function getWeatherIcon(code) {
    if (code === 0 || code === 1) return "☀️";
    if (code === 2) return "⛅";
    if (code === 3) return "☁️";
    if (code === 45 || code === 48) return "🌫️";
    if (code >= 51 && code <= 55) return "🌦️";
    if (code >= 61 && code <= 65) return "🌧️";
    if (code >= 71 && code <= 75) return "❄️";
    if (code === 95) return "⛈️";
    return "☁️";
  }

  function getCardStyle(code) {
    if (code === 0 || code === 1) return { background: "linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%)" };
    if (code === 2 || code === 3) return { background: "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)" };
    if (code === 45 || code === 48) return { background: "linear-gradient(135deg, #D1D5DB 0%, #9CA3AF 100%)" };
    if (code >= 51 && code <= 65) return { background: "linear-gradient(135deg, #DBEAFE 0%, #93C5FD 100%)" };
    if (code >= 71 && code <= 75) return { background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" };
    if (code === 95) return { background: "linear-gradient(135deg, #E9D5FF 0%, #C4B5FD 100%)" };
    return { background: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)" };
  }

  return (
    <div className="weather-dashboard">
      <section className="api-header">
        <div className="container">
          <h1>Nuestros Climas</h1>
          <p>Condiciones meteorológicas actuales en nuestras ubicaciones</p>
        </div>
      </section>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="cards-container">
          {weatherData.map((dev, index) => (
            <div
              key={index}
              className="weather-card"
              style={getCardStyle(dev.code)}
            >
              <h3 className="dev-name">{dev.name}</h3>
              <p className="dev-location">{dev.city}, {dev.province}</p>

              <div className="weather-icon">
                {getWeatherIcon(dev.code)}
              </div>

              <div className="temperature">
                {Math.round(dev.temp)}°C
              </div>

              <div className="weather-description">
                <p className="weather-description-text">
                  {getWeatherDescription(dev.code)}
                </p>
              </div>

              <div className="wind-info">
                <span className="wind-icon">💨</span>
                <span>Viento: {dev.windSpeed} km/h</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="footer-text">
        Datos provistos por Open-Meteo API • Actualizado en tiempo real
      </p>
    </div>
  );
}