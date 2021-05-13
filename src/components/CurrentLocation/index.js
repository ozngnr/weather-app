import React, { useState } from "react";
import Moment from "react-moment";
import showers from "../../assets/images/Shower.png"

export default function CurrentLocation({ weather }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }


  console.log(weather);
  return (
    <section className="section-weather">

      <form onSubmit={handleSubmit} className="search">
        <input
          type="text"
          className="search__bar"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="gps-btn">+</button>
      </form>

      <div className="currentWeather">
        <img className="currentWeather__img" src={showers} alt="" />
        <p className="currentWeather__temp">{Math.round(weather.forecast[index].max_temp)}<span>°C</span></p>
        <p className="currentWeather__state">
          {weather.forecast[index].weather_state_name}
        </p>
        <p className="currentWeather__date">
          {"Today"}<span className="currentWeather__date-dot"></span>
          <Moment date={weather.forecast[index].applicable_date} format="ddd, D MMM" />
        </p>
        <p className="currentWeather__city">{weather.city}</p>
      </div>
      
    </section>
  );
}
