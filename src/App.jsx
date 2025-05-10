import React from 'react'
import './App.css'
import WeatherDashboard from './components/WeatherDashboard'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
      </header>
      <main>
        <WeatherDashboard />
      </main>
    </div>
  )
}

export default App