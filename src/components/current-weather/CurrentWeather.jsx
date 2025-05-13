import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Compass from '../compass/Compass';
import './CurrentWeather.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurrentWeather = ({ currentWeather, dailyData }) => {
  const dailyTempData = {
    labels: dailyData.map(d => d.time),
    datasets: [
      {
        label: 'Temperature (°F)',
        data: dailyData.map(d => d.temperature),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  return (
    <div className="weather-grid">
      <div className="weather-card">
        <h3>Temperature</h3>
        <div className="temperature-container">
          <div className="temperature">{currentWeather.temperature}°F</div>
          <div className="temperature-chart">
            <Line data={dailyTempData} options={chartOptions} />
          </div>
        </div>
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