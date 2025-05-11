import React from 'react';
import CurrentWeather from './current-weather/CurrentWeather';
import WeatherCharts from './weather-charts/WeatherCharts';
import WeatherMap from './weather-map/WeatherMap';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  // Mock data for demonstration
  const currentWeather = {
    temperature: 22,
    windDirection: 45,
    windSpeed: 15,
    humidity: 65,
    pressure: 1013
  };

  const dailyData = [
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
      <h1>Weather Dashboard</h1>
      <CurrentWeather currentWeather={currentWeather} />
      <WeatherCharts dailyData={dailyData} weeklyData={weeklyData} />
      <WeatherMap />
    </div>
  );
};

export default WeatherDashboard; 