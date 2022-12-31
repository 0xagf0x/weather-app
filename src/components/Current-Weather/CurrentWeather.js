import React from 'react';
import './currentWeather.css';

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-desc'>{data.weather[0].description}</p>
        </div>
        <img className='weather-icon' src={`icons/${data.weather[0].icon}.png`} alt='weather' />
      </div>
      <div className='bottom'>
        <p className='temp'>{data.main.temp}°F</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          {/* <div className='parameter-row'>
            <span className='parameter-label'>Precipitation</span>
            <span className='parameter-value'>{data.main.feels_like}°F</span>
          </div> */}
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>{data.wind.speed} mph</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{data.main.humidity}%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;