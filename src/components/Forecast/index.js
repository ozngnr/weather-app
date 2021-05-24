import React, { useState } from "react";
import WeatherCard from "../WeatherCard";
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import { HumidityBar } from "..";

export default function Forecast({ forecast }) {
  const [isFahrenheit, setIsFahrenheit] = useState(false)

  return (
    <section className="section-forecast">
      <div className="container">
        
        <div className="temp-btn-container">
          <button className="btn btn__secondary" onClick={() => setIsFahrenheit(false)}>°C</button>
          <button className="btn btn__secondary" onClick={() => setIsFahrenheit(true)}>°F</button>
        </div>

        <div className="cards">
          {forecast.map(day => (
            <WeatherCard key={day.id} day={day} />
          )).slice(1)}
        </div>
        
        <div className="cards cards-highlights">

          <h1 className="cards__title">Today's Highlights</h1>

          <div className="card">
            <h3 className="card__name">Wind status</h3>
            <p className="card__text">
              {Math.round(forecast[0].wind_speed)}
              <span className="card__text-unit"> mph</span>
            </p>
            <div className="card__compass">  
              <div className="card__compass-iconBg">
                <NavigationRoundedIcon
                  style={{
                    transform: `rotate(${forecast[0].wind_direction}deg)`
                  }}
                  fontSize="small"
                />
              </div>
              <p className="card__compass-text">{forecast[0].wind_direction_compass}</p>
            </div>
          </div>
          
          <div className="card">
            <h3 className="card__name">Humidity</h3>
            <p className="card__text">
              {forecast[0].humidity}
              <span className="card__text-unit">%</span>
            </p>
            <HumidityBar />
          </div>

          <div className="card">
            <h3 className="card__name">Visibility</h3>
            <p className="card__text">
              {parseFloat(forecast[0].visibility).toFixed(1)}
              <span className="card__text-unit"> miles</span>
            </p>
          </div>

          <div className="card">
            <h3 className="card__name">Air Pressure</h3>
            <p className="card__text">
              {forecast[0].air_pressure}
              <span className="card__text-unit"> mb</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
