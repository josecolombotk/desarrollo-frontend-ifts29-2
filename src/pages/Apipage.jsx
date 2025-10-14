import { useState, useEffect } from "react";

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

  const styles = `
    .weather-dashboard {
      min-height: 100vh;
      background: linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 50%, #F3E8FF 100%);
      padding: 3rem 1rem;
    }

    .dashboard-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .dashboard-title {
      font-size: 3rem;
      font-weight: 800;
      color: #1F2937;
      margin-bottom: 1rem;
    }

    .dashboard-subtitle {
      font-size: 1.25rem;
      color: #6B7280;
    }

    .cards-container {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      padding: 0 1rem;
    }

    @media (min-width: 1024px) {
      .cards-container {
        grid-template-columns: repeat(5, 1fr);
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .cards-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .weather-card {
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .weather-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
    }

    .dev-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1F2937;
      margin-bottom: 0.25rem;
    }

    .dev-location {
      font-size: 0.875rem;
      color: #6B7280;
      margin-bottom: 1.5rem;
    }

    .weather-icon {
      font-size: 4rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .temperature {
      font-size: 3rem;
      font-weight: 700;
      color: #1F2937;
      text-align: center;
      margin-bottom: 1rem;
    }

    .weather-description {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 0.5rem;
      padding: 0.75rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .weather-description-text {
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;
    }

    .wind-info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      color: #6B7280;
    }

    .wind-icon {
      margin-right: 0.25rem;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 16rem;
    }

    .spinner {
      border: 4px solid #E5E7EB;
      border-top: 4px solid #3B82F6;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .footer-text {
      text-align: center;
      margin-top: 3rem;
      font-size: 0.875rem;
      color: #9CA3AF;
    }

    @media (max-width: 768px) {
      .dashboard-title {
        font-size: 2rem;
      }

      .dashboard-subtitle {
        font-size: 1rem;
      }

      .cards-container {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="weather-dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-title">
            Nuestros Climas
          </h1>
          <p className="dashboard-subtitle">
            Condiciones meteorológicas actuales en las ubicaciones de nuestros desarrolladores
          </p>
        </div>

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
    </>
  );
}