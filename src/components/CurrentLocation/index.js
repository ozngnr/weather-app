import React, { useState } from "react";

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
      <img className="currentWeather__img" src="" alt="" />
      <p className="currentWeather__temp">{weather.forecast[0].max_temp}</p>
      <p className="currentWeather__state">
        {weather.forecast[0].weather_state_name}
      </p>
      <div className="currentWeather-date">
        <p className="day">{}</p>
        <p className="date">{weather.forecast[0].applicable_date}</p>
      </div>
      <p className="city">{weather.city}</p>
    </div>
  );
}
