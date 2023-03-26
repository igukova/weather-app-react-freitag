import React from 'react';
import './App.css';
import WeatherSearch from './WeatherSearch';


export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <footer> <a href="https://github.com/igukova/weather-app-react-freitag"> Open-source code</a> by Iryna Gukova</footer>
    </div>
  );
}