import React from 'react';
import Moment from 'react-moment';
import { weatherIcon } from '../../utils/weatherIcon'

export default function WeatherCard({ day }) {
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
        <p className="card__temp-max">{Math.round(day.max_temp)}</p>
        <p className="card__temp-min">{Math.round(day.min_temp)}</p>
      </div>
    </div>
  )
};
