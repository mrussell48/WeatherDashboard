import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherCharts from './WeatherCharts';
import WeatherMap from './WeatherMap';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  // Sample data - to be replace with actual API data
  const dailyRainfallData = {
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    datasets: [
      {
        label: 'Daily Rainfall (mm)',
        data: [0, 2.5, 5, 3, 1, 0],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const weeklyRainfallData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Weekly Rainfall (mm)',
        data: [5, 8, 12, 7, 3, 2, 0],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const currentWeather = {
    temperature: 22,
    windSpeed: 15,
    windDirection: 45, // degrees
    humidity: 65,
    pressure: 1013, // hPa
  };

  return (
    <div className="weather-dashboard">
      <CurrentWeather weather={currentWeather} />
      <WeatherCharts 
        dailyRainfall={dailyRainfallData}
        weeklyRainfall={weeklyRainfallData}
      />
      <WeatherMap />
    </div>
  );
};

export default WeatherDashboard; 