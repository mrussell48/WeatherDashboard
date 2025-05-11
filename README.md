# Weather Dashboard

A modern, responsive weather dashboard built with React that provides real-time weather information and forecasts. The dashboard features a clean, intuitive interface with interactive components for displaying current weather conditions, rainfall charts, and a hurricane tracking map.

## Features

- **Current Weather Display**
  - Temperature
  - Wind Direction (with interactive compass)
  - Wind Speed
  - Humidity
  - Barometric Pressure

- **Weather Charts**
  - Daily Rainfall Chart (Line Chart)
  - Weekly Rainfall Chart (Bar Chart)
  - Automatic rotation between charts
  - Smooth transitions

- **Hurricane Tracking Map**
  - Real-time wind and pressure data
  - Interactive controls
  - Focused on Florida region
  - Multiple weather layers

- **Responsive Design**
  - Adapts to all screen sizes
  - Mobile-friendly layout
  - Optimized component spacing

## Technologies Used

- React 18
- Chart.js with react-chartjs-2
- Windy.com API for weather maps
- CSS3 with Flexbox and Grid
- Vite for build tooling

## Project Structure

```
src/
├── components/
│   ├── compass/
│   │   ├── Compass.jsx
│   │   └── Compass.css
│   ├── current-weather/
│   │   ├── CurrentWeather.jsx
│   │   └── CurrentWeather.css
│   ├── weather-charts/
│   │   ├── WeatherCharts.jsx
│   │   └── WeatherCharts.css
│   ├── weather-map/
│   │   ├── WeatherMap.jsx
│   │   └── WeatherMap.css
│   └── WeatherDashboard.jsx
└── App.jsx
```

## Component Overview

- **Compass**: Interactive wind direction indicator with smooth animations
- **CurrentWeather**: Displays current temperature, wind metrics, humidity, and pressure
- **WeatherCharts**: Shows rainfall data with daily line chart and weekly bar chart
- **WeatherMap**: Interactive hurricane tracking map with wind and pressure layers

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/WeatherDashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd WeatherDashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Windy.com for providing the weather map integration
- Chart.js for the charting capabilities
- React community for the excellent documentation and support
