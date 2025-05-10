import React, { useState, useEffect } from 'react';
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
  const [activeChart, setActiveChart] = useState('daily');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveChart(prev => prev === 'daily' ? 'weekly' : 'daily');
        setIsTransitioning(false);
      }, 5); // Half of the transition duration
    }, 30000); // Switch every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-charts">
      <div className={`chart-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <h3>{activeChart === 'daily' ? 'Daily Rainfall' : 'Weekly Rainfall'}</h3>
        {activeChart === 'daily' ? (
          <Line data={dailyRainfall} />
        ) : (
          <Bar data={weeklyRainfall} />
        )}
      </div>
    </div>
  );
};

export default WeatherCharts; 