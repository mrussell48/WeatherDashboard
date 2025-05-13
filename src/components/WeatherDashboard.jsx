import React from 'react';
import CurrentWeather from './current-weather/CurrentWeather';
import RainfallCharts from './rainfall-charts/RainfallCharts.jsx';
import WeatherMap from './weather-map/WeatherMap';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  // Mock data for demonstration
  const currentWeather = {
    temperature: 72,
    windDirection: 45,
    windSpeed: 15,
    humidity: 65,
    pressure: 1013,
    description: 'Partly Cloudy'
  };

  const dailyTempData = [
    { time: '00:00', temperature: 68 },
    { time: '03:00', temperature: 66 },
    { time: '06:00', temperature: 65 },
    { time: '09:00', temperature: 70 },
    { time: '12:00', temperature: 75 },
    { time: '15:00', temperature: 78 },
    { time: '18:00', temperature: 76 },
    { time: '21:00', temperature: 72 }
  ];

  const dailyRainData = [
    { time: '00:00', rainfall: 0 },
    { time: '03:00', rainfall: 2 },
    { time: '06:00', rainfall: 5 },
    { time: '09:00', rainfall: 3 },
    { time: '12:00', rainfall: 1 },
    { time: '15:00', rainfall: 0 },
    { time: '18:00', rainfall: 0 },
    { time: '21:00', rainfall: 0 }
  ];

  const weeklyData = [
    { day: 'Mon', rainfall: 12 },
    { day: 'Tue', rainfall: 8 },
    { day: 'Wed', rainfall: 15 },
    { day: 'Thu', rainfall: 5 },
    { day: 'Fri', rainfall: 3 },
    { day: 'Sat', rainfall: 0 },
    { day: 'Sun', rainfall: 0 }
  ];

  return (
    <div className="weather-dashboard">
      <CurrentWeather currentWeather={currentWeather} dailyData={dailyTempData} />
      <RainfallCharts 
        dailyRainData={dailyRainData} 
        weeklyData={weeklyData} 
      />
      <WeatherMap />
    </div>
  );
};

export default WeatherDashboard; 