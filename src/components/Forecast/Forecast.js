import React from 'react';
import './forecast.css';

const Forecast = ({data}) => {
  return (
    <div className="forecast">
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

export default Forecast;