import React from 'react';
import Compass from '../compass/Compass';
import './CurrentWeather.css';

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="weather-grid">
      <div className="weather-card">
        <h3>Current Weather</h3>
        <div className="temperature">{currentWeather.temperature}</div>
        <div className="weather-description">{currentWeather.description}</div>
      </div>
      
      <div className="weather-card">
        <h3>Wind & Conditions</h3>
        <div className="wind-humidity-metrics">
          <div className="wind-direction">
            <div className="compass-container">
              <Compass direction={currentWeather.windDirection} />
            </div>
          </div>
          <div className="metric">
            <h4>Wind Speed</h4>
            <p>{currentWeather.windSpeed}</p>
          </div>
          <div className="metric">
            <h4>Humidity</h4>
            <p>{currentWeather.humidity}</p>
          </div>
          <div className="metric">
            <h4>Pressure</h4>
            <p>{currentWeather.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather; 