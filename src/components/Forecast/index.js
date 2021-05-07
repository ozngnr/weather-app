import React from "react";
import WeatherCard from "../WeatherCard";

export default function Forecast({ forecast }) {

  console.log(forecast)
  return (
    <>
      <div className="cards weather-cards">
        {forecast.map(day => (
          <WeatherCard key={day.id} day={day}/>
        )).slice(1)}
      </div>
      <h1>Today's Highlights</h1>
      <div className="cards highlight-cards">
        <div className="card">
          <h3 className="card__name">Wind status</h3>
          <p className="card__text">
            <span 
              className="card__compass" 
              style={{ transform: `rotate(${forecast[0].wind_direction}deg)`}}
            > ^ </span>
            {Math.round(forecast[0].wind_speed)} mph</p>
          <div className="card__progressBar"></div>
        </div>
      </div>
    </>
  );
}
