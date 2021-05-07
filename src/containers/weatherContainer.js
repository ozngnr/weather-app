import React, { useState, useEffect } from "react";
import { CurrentLocation, Forecast } from "../components";
import weatherData from "../weather.json"

export const WeatherContainer = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({
    forecast: [
        {
          id: "",
          weather_state_name: "",
          weather_state_abbr: "",
          wind_direction_compass: "",
          created: "",
          applicable_date: "",
          min_temp: "",
          max_temp: "",
          the_temp: "",
          wind_speed: "",
          wind_direction: "",
          air_pressure: "",
          humidity: "",
          visibility: "",
          predictability: "",
        },
      ],
    city: "",
  });

  useEffect(() => {
    setWeather({
      forecast: weatherData.consolidated_weather,
      city: weatherData.title
    })
  }, [])
  // const API_BASE =
  //   "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";

  // async function getWeather(woeid) {
  //   const weatherResponse = await fetch(`${API_BASE}/${woeid}/`);
  //   const weatherData = await weatherResponse.json();
  //   setWeather({
  //     forecast: weatherData.consolidated_weather,
  //     city: weatherData.title,
  //   });
  // }

  // function getPosition(options) {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(resolve, reject, options);
  //   });
  // }

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     getPosition()
  //       .then(async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         const locationResponse = await fetch(
  //           `${API_BASE}search/?lattlong=${latitude},${longitude}`
  //         );
  //         const locationData = await locationResponse.json();

  //         setLocation(locationData[0]);
  //         getWeather(locationData[0].woeid);
  //       })
  //       .catch((err) => alert(err));
  //   } else {
  //     alert("Location Service not available on your device");
  //   }
  // }, []);

  console.log(weather);
  
  return (
    <>
      <CurrentLocation weather={weather}/>
      <Forecast forecast={weather.forecast} />
    </>
  );
};
