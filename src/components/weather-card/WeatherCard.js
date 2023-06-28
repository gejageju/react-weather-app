const WeatherCard = (props)=>{
    console.log(props.data);
    if (props.data) {return(
        <div>
            <span>temperature : {props.data.main.temp }</span>
            <span>feels like : {props.data.main.feels_like}</span>
            <span>humidity : {props.data.main.humidity}</span>
            <span>pressure : {props.data.main.pressure}</span>
            <span>{props.data.weather[0].main}</span>
            <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/>
            <span>{props.data.wind.speed}</span>
        </div>
    )} else{ return(<p></p>)}
}

export default WeatherCard;