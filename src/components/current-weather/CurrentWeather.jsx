import React from 'react';
import Compass from '../compass/Compass';
import './CurrentWeather.css';

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <div className="weather-grid">
        <div className="weather-card">
          <h3>Temperature</h3>
          <p className="temperature">{currentWeather.temperature}°C</p>
        </div>
        
        <div className="wind-humidity-card">
          <div className="wind-direction">
            <h3>Wind Direction</h3>
            <Compass direction={currentWeather.windDirection} />
          </div>
          
          <div className="wind-humidity-metrics">
            <div className="metric">
              <h3>Wind Speed</h3>
              <p>{currentWeather.windSpeed} km/h</p>
            </div>
            <div className="metric">
              <h3>Humidity</h3>
              <p>{currentWeather.humidity}%</p>
            </div>
            <div className="metric">
              <h3>Pressure</h3>
              <p>{currentWeather.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather; 