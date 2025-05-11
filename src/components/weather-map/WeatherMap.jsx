import React from 'react';
import './WeatherMap.css';

const WeatherMap = () => {
  // Florida's approximate center coordinates
  const lat = 27.6648;
  const lon = -81.5158;
  const zoom = 5; // Slightly zoomed out to see more of the surrounding ocean

  return (
    <div className="weather-map-card">
      <h3>Hurricane Tracking Map</h3>
      <div className="map-container">
        <iframe
          title="Weather Map"
          width="100%"
          height="300"
          frameBorder="0"
          src={`https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=${zoom}&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=&pressure=true&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default WeatherMap; 