import Search from './search/Search.js'
import { apiKey, weatherApiUrl } from '../utils/api.js';
import WeatherCard from './weather-card/WeatherCard.js';
import React, { useState,useEffect } from 'react';

function App() {
  
  const [weatherData,setWeatherData] = useState(null);
  const [location,setLocation] =useState(['Madurai','India']);

  const getWeatherData = (lat,lon)=>{
    fetch(`${weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then((result)=>result.json())
    .then((result)=>setWeatherData(result))
    .catch((err)=>{
     console.log(err);
    });
  }

  useEffect(()=>{
    getWeatherData(9.919,78.1195);
  },[])

  const onSearchChange =async (searchData)=>{
    
    //console.log(searchData);
    const [lat,lon]=searchData.value.split(" ");
    getWeatherData(lat,lon);
  }


  return (
    <div className="container">
      <Search onSearchChange={onSearchChange}/>
      {weatherData? <WeatherCard data={weatherData}/>:<p></p> }
    </div>
  );
}

export default App;
