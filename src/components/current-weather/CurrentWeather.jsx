import React from 'react';
import Compass from '../compass/Compass';
import './CurrentWeather.css';

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="weather-grid">
      <div className="weather-card">
        <h3>Temperature</h3>
        <div className="temperature">{currentWeather.temperature}°F</div>
        <div className="weather-description">{currentWeather.description}</div>
      </div>
      
      <div className="weather-card">
        <div className="wind-humidity-metrics">
          <div className="wind-direction">
            <h3>Direction</h3>
            <div className="compass-container">
              <Compass degree={currentWeather.windDirection} />
            </div>
          </div>
          <div className="metrics-container">
            <div className="metric">
              <h4>Wind Speed</h4>
              <p>{currentWeather.windSpeed} mph</p>
            </div>
            <div className="metric">
              <h4>Humidity</h4>
              <p>{currentWeather.humidity}%</p>
            </div>
            <div className="metric">
              <h4>Pressure</h4>
              <p>{currentWeather.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather; 