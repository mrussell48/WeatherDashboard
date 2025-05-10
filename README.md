# Weather Dashboard

A modern, responsive weather dashboard built with React that displays current weather conditions and historical weather data through interactive charts.

## Features

- **Current Weather Display**
  - Temperature
  - Wind Speed and Direction (with interactive compass)
  - Humidity
  - All metrics in a clean, card-based layout

- **Weather Charts**
  - Daily Rainfall Chart (Line Chart)
  - Weekly Rainfall Chart (Bar Chart)
  - Interactive and responsive charts

- **Responsive Design**
  - Adapts to all screen sizes
  - Mobile-friendly interface
  - Clean, modern UI with cards and shadows

## Technologies Used

- React
- Chart.js with react-chartjs-2 for data visualization
- GSAP for smooth animations
- CSS3 with Flexbox and Grid for layout
- Vite for fast development and building

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mrussell48/WeatherDashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd WeatherDashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Project Structure

```
WeatherDashboard/
├── src/
│   ├── components/
│   │   ├── compass/
│   │   │   ├── Compass.jsx
│   │   │   └── Compass.css
│   │   ├── CurrentWeather.jsx
│   │   ├── CurrentWeather.css
│   │   ├── WeatherCharts.jsx
│   │   ├── WeatherCharts.css
│   │   ├── WeatherDashboard.jsx
│   │   └── WeatherDashboard.css
│   ├── assets/
│   │   ├── Compass.svg
│   │   └── Arrow.svg
│   ├── App.jsx
│   └── App.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Component Overview

- **WeatherDashboard**: Main container component that manages data and layout
- **CurrentWeather**: Displays current weather metrics with a combined wind/humidity card
- **WeatherCharts**: Renders interactive charts for rainfall data
- **Compass**: Interactive wind direction indicator with smooth animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Chart.js for the powerful charting library
- GSAP for the smooth animations
- React community for the excellent documentation and tools
