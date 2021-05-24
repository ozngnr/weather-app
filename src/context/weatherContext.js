import React, { useState, useEffect, createContext } from 'react';
import weatherData from "../weather.json"

const WeatherContext = createContext()

function WeatherContextProvider({children}) {
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

  return (
    <WeatherContext.Provider value={{weather}}>
      {children}
    </WeatherContext.Provider>
  )
}

export {WeatherContext, WeatherContextProvider}