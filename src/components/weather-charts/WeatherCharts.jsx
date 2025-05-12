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
  Legend
} from 'chart.js';
import './WeatherCharts.css';

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

const WeatherCharts = ({ dailyRainData, weeklyData }) => {
  const [activeChart, setActiveChart] = useState('daily');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveChart(prev => prev === 'daily' ? 'weekly' : 'daily');
        setIsTransitioning(false);
      }, 500);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const dailyRainChartData = {
    labels: dailyRainData.map(d => d.time),
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: dailyRainData.map(d => d.rainfall),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.4
      }
    ]
  };

  const weeklyChartData = {
    labels: weeklyData.map(d => d.day),
    datasets: [
      {
        label: 'Weekly Rainfall (mm)',
        data: weeklyData.map(d => d.rainfall),
        backgroundColor: 'rgba(53, 162, 235, 0.8)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1
      }
    ]
  };

  const getChartOptions = (type) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: type === 'daily' ? 'Daily Rainfall' : 'Weekly Rainfall'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Rainfall (mm)'
        }
      }
    }
  });

  return (
    <div className="weather-charts">
      <div className="chart-container">
        <div className={`chart ${activeChart === 'daily' ? 'fade-in' : 'fade-out'}`}>
          <Line data={dailyRainChartData} options={getChartOptions('daily')} />
        </div>
        <div className={`chart ${activeChart === 'weekly' ? 'fade-in' : 'fade-out'}`}>
          <Bar data={weeklyChartData} options={getChartOptions('weekly')} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCharts; 