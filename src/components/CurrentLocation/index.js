import React, { useState } from "react";
import showers from "../../assets/images/Shower.png"

export default function CurrentLocation({ weather }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(weather);
  return (
    <div className="currentWeather">
      <div className="search">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="gps-btn">CurrentLocation</button>
        </form>
      </div>
      <img className="currentWeather__img" src={showers} alt="" />
      <p className="currentWeather__temp">{Math.round(weather.forecast[0].max_temp)}<span>°C</span></p>
      <p className="currentWeather__state">
        {weather.forecast[0].weather_state_name}
      </p>
      <p className="dateInfo">{"Today"}<span></span>{weather.forecast[0].applicable_date}</p>
      <p className="cityName">{weather.city}</p>
    </div>
  );
}
