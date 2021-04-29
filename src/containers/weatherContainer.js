import React, { useState, useEffect } from "react";
import { CurrentLocation, Forecast } from "../components";

export const WeatherContainer = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({
    forecast: [
      {
        id: 5363033271435264,
        weather_state_name: "Showers",
        weather_state_abbr: "s",
        wind_direction_compass: "N",
        created: "2021-04-29T12:31:01.072943Z",
        applicable_date: "2021-04-29",
        min_temp: 3.71,
        max_temp: 12.285,
        the_temp: 10.945,
        wind_speed: 6.072489836938943,
        wind_direction: 0.9999999999999987,
        air_pressure: 1011,
        humidity: 53,
        visibility: 11.506241052254833,
        predictability: 73,
      },
    ],
    city: "London",
  });

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
      <CurrentLocation weather={weather} />
      <Forecast />
    </>
  );
};
