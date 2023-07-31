import Search from './search/Search.js'
import { apiKey, weatherApiUrl } from '../utils/api.js';
import WeatherCard from './weather-card/WeatherCard.js';
import React, { useState,useEffect } from 'react';

function App(){
  const [weatherData,setWeatherData] = useState(null);
  const [location,setLocation] =useState('Madurai,India');
  const[bgimg,setBgimg]=useState('01d');

  const getWeatherData = (lat,lon)=>{
    fetch(`${weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then((result)=>result.json())
    .then((result)=>{
      setWeatherData(result);
      console.log(result.weather[0].icon);
      setBgimg(result.weather[0].icon);
    })
    .catch((err)=>{
     console.log(err);
    });
    console.log("fetched data")
  }

  useEffect(()=>{
    getWeatherData(9.919,78.1195);
  },[])

  const onSearchChange =async (searchData)=>{
    
    console.log(searchData);
    const [lat,lon]=searchData.value.split(" ");
    setLocation(searchData.label);
    getWeatherData(lat,lon);
  }


  return (
    <div className='main-container' style={{backgroundImage: `url(https://gejageju.github.io/react-weather-app/${bgimg}.jpg)`,backgroundSize:"cover"}}>
    <div className="container">
      <Search onSearchChange={onSearchChange}/>
       {weatherData? <WeatherCard data={weatherData} location={location}/>:<p></p> } 
    </div>
    </div>
  );
}

export default App;
