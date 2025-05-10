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
import './WeatherCharts.css';

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

const WeatherCharts = ({ dailyRainfall, weeklyRainfall }) => {
  return (
    <div className="weather-charts">
      <div className="chart-container">
        <h3>Daily Rainfall</h3>
        <Line data={dailyRainfall} />
      </div>
      <div className="chart-container">
        <h3>Weekly Rainfall</h3>
        <Bar data={weeklyRainfall} />
      </div>
    </div>
  );
};

export default WeatherCharts; 