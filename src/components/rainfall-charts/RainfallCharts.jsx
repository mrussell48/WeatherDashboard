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
import './RainfallCharts.css';

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

const RainfallCharts = ({ dailyRainData, weeklyData }) => {
  const [activeChart, setActiveChart] = useState('daily');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChart(prev => {
        if (prev === 'daily') return 'weekly';
        return 'daily';
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const dailyChartData = {
    labels: dailyRainData.map(data => data.time),
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: dailyRainData.map(data => data.rainfall),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4
      }
    ]
  };

  const weeklyChartData = {
    labels: weeklyData.map(data => data.day),
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: weeklyData.map(data => data.rainfall),
        backgroundColor: 'rgba(53, 162, 235, 0.8)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1
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
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="rainfall-charts">
      <h3 className="chart-title">
        {activeChart === 'daily' ? 'Daily Rainfall' : 'Weekly Rainfall'}
      </h3>
      <div className="chart-container">
        {activeChart === 'daily' ? (
          <Line data={dailyChartData} options={chartOptions} />
        ) : (
          <Bar data={weeklyChartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export { RainfallCharts };
export default RainfallCharts; 