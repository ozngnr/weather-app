import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  
  const API_URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"

  async function fetchUserLocation(latt, long) {
    const locationResponse = await fetch(`${API_URL}search/?lattlong=${latt},${long}`)
    const locationData = await locationResponse.json()
    setLocation(locationData[0])
    fetchWeather(locationData[0].woeid)
  }

  async function fetchWeather(woeid) {
    const weatherResponse = await fetch(`${API_URL}/${woeid}/`)
    const weatherData = await weatherResponse.json()
    setWeather(weatherData)
  }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
      alert("Location not available on your device")
    }  


    function showPosition(position) {
      const {latitude, longitude} = position.coords
      fetchUserLocation(latitude, longitude)
    }
  
    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
      }
    }
  }, [])

  console.log(location)
  console.log(weather)
  return (
    <>
      <div className="side-info">
        <form className="side-info__search-form">
          <label>
            <input type="text" className="side-info__search-bar" placeholder="Search For Places"/>
          </label>
          <button className="side-info__gps-btn">Current Location</button>
        </form>
      </div>
    </>
  );
}

export default App;
