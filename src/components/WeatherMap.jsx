import React from 'react';
import './WeatherMap.css';

const WeatherMap = () => {
  // Florida's approximate center coordinates
  const lat = 27.6648;
  const lon = -81.5158;
  const zoom = 6;
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // You'll need to replace this with your actual API key

  return (
    <div className="weather-map-card">
      <h3>Weather Map</h3>
      <div className="map-container">
        <iframe
          title="Weather Map"
          width="100%"
          height="300"
          frameBorder="0"
          src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=${zoom}`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default WeatherMap; 