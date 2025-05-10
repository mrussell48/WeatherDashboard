import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Compass from './compass/Compass';
import './WeatherDashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeatherDashboard = () => {
  // Sample data - replace with actual API data
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
  };

  return (
    <div className="weather-dashboard">
      <div className="current-weather">
        <h2>Current Weather</h2>
        <div className="weather-grid">
          <div className="weather-card">
            <h3>Temperature</h3>
            <p>{currentWeather.temperature}°C</p>
          </div>
          <div className="weather-card">
            <h3>Wind Speed</h3>
            <p>{currentWeather.windSpeed} km/h</p>
          </div>
          <div className="weather-card">
            <h3>Wind Direction</h3>
            <Compass degree={currentWeather.windDirection} />
          </div>
          <div className="weather-card">
            <h3>Humidity</h3>
            <p>{currentWeather.humidity}%</p>
          </div>
        </div>
      </div>

      <div className="weather-charts">
        <div className="chart-container">
          <h3>Daily Rainfall</h3>
          <Line data={dailyRainfallData} />
        </div>
        <div className="chart-container">
          <h3>Weekly Rainfall</h3>
          <Bar data={weeklyRainfallData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard; 