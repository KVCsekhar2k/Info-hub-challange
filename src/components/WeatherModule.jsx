// src/components/WeatherModule.jsx
import "./WeatherModule.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WeatherModule() {
  const [city, setCity] = useState("Madrid");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const fetchWeather = async () => {
    try {
      const res = await axios.get(`/api/weather?city=${city}`);
      setData(res.data.weather);
    } catch (err) {
      console.error("Error fetching weather", err);
    }
  };

  // mock hourly + weekly data for UI (replace later with API)
  const hourlyData = [
    { time: "6:00 AM", temp: 25, icon: "🌤️" },
    { time: "9:00 AM", temp: 28, icon: "🌞" },
    { time: "12:00 PM", temp: 33, icon: "☀️" },
    { time: "3:00 PM", temp: 34, icon: "☀️" },
    { time: "6:00 PM", temp: 32, icon: "☀️" },
    { time: "9:00 PM", temp: 30, icon: "🌙" },
  ];

  const weeklyData = [
    { day: "Today", condition: "Sunny", temp: "36/22", icon: "☀️" },
    { day: "Tue", condition: "Sunny", temp: "37/21", icon: "☀️" },
    { day: "Wed", condition: "Sunny", temp: "37/21", icon: "☀️" },
    { day: "Thu", condition: "Cloudy", temp: "37/21", icon: "☁️" },
    { day: "Fri", condition: "Cloudy", temp: "37/21", icon: "☁️" },
    { day: "Sat", condition: "Rainy", temp: "37/21", icon: "🌧️" },
    { day: "Sun", condition: "Sunny", temp: "37/21", icon: "☀️" },
  ];

  return (
    <div className="weather-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="side-icon active">🌤</div>
        <div className="side-icon">🏙</div>
        <div className="side-icon">🗺</div>
        <div className="side-icon">⚙️</div>
        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Home
        </button>
      </div>

      {/* Main Weather Panel */}
      <div className="main-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for cities"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        <div className="city-overview">
          <div>
            <div className="city-name">{data ? data.city : city}</div>
          <p className="rain-chance">Chance of rain: 0%</p>
          </div>
          <div className="temperature">
            {data ? `${Math.round(data.temperature)}°` : "31°"}
          </div>
          <div className="big-icon">☀️</div>
        </div>

        <div className="forecast-container">
          <h3>Today's Forecast</h3>
          <div className="forecast-cards">
            {hourlyData.map((h, i) => (
              <div key={i} className="forecast-card">
                <p>{h.time}</p>
                <span className="forecast-icon">{h.icon}</span>
                <p>{h.temp}°</p>
              </div>
            ))}
          </div>
        </div>

        <div className="air-conditions">
          <h3>Air Conditions</h3>
          <div className="air-grid">
            <div className="air-box">
              <p>Real Feel</p>
              <h4>30°</h4>
            </div>
            <div className="air-box">
              <p>Wind</p>
              <h4>0.2 km/h</h4>
            </div>
            <div className="air-box">
              <p>Chance of Rain</p>
              <h4>0%</h4>
            </div>
            <div className="air-box">
              <p>UV Index</p>
              <h4>3</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Right Weekly Forecast */}
      <div className="weekly-panel">
        <h3>7-Day Forecast</h3>
        <div className="weekly-list">
          {weeklyData.map((day, i) => (
            <div key={i} className="weekly-item">
              <span>{day.day}</span>
              <span className="weekly-icon">{day.icon}</span>
              <span>{day.condition}</span>
              <span className="weekly-temp">{day.temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
