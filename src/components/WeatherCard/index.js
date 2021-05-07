import React from 'react';
import Moment from 'react-moment';
import images from '../../assets'

export default function WeatherCard({ day }) {

  const weatherIcon = ( day ) => {
    const stateName = day.weather_state_name.split(' ').join('')
    return images[stateName]
  }

  return (
    <div className="card">
      <Moment className="card__date" date={day.applicable_date} format="ddd, D MMM"/>
      <img 
        className="card__img" 
        draggable={false} 
        src={weatherIcon(day)} 
        alt={day.weather_state_name}
      />
      <div className="card__temp">
        <p className="max">{Math.round(day.max_temp)}°C</p>
        <p className="min">{Math.round(day.min_temp)}°C</p>
      </div>
    </div>
  )
};
