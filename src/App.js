import React from 'react';
import './App.css';
import WeatherSearch from './WeatherSearch';


export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <footer>Open-source code by Iryna Gukova</footer>
    </div>
  );
}