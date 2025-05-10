import React from 'react';
import Compass from './compass/Compass';
import './CurrentWeather.css';

const CurrentWeather = ({ weather }) => {
  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <div className="weather-grid">
        <div className="weather-card">
          <h3>Temperature</h3>
          <p>{weather.temperature}°F</p>
        </div>
        <div className="weather-card wind-humidity-card">
          <div className="wind-direction">
            <h3>Wind Direction</h3>
            <Compass degree={weather.windDirection} />
          </div>
          <div className="wind-humidity-metrics">
            <div className="metric">
              <h3>Wind Speed</h3>
              <p>{weather.windSpeed} km/h</p>
            </div>
            <div className="metric">
              <h3>Humidity</h3>
              <p>{weather.humidity}%</p>
            </div>
            <div className="metric">
              <h3>Pressure</h3>
              <p>{weather.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather; 