import './App.css';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import Search from "./components/Search/Search";
import Forecast from './components/Forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (_searchData) => {
    console.log('_searchData', _searchData);
    const [lat, lon] = _searchData.value.split(" ");

    //fetch api calls (for curernt + forecast)
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
 
        setCurrentWeather({ city: _searchData.label, ...weatherResponse});
        setForecast({ city: _searchData.label, ...forecastResponse});
      }).catch((error) => console.log(error));
  }

  console.log('currentWeather', currentWeather);
  console.log('forecast',forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} /> }
      {forecast &&  <Forecast data={forecast} /> }
    
    </div>
  );
}

export default App;
