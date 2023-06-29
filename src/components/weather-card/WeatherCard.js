import icon from '../weather-card/location.png'
const WeatherCard = (props)=>{
    console.log(props.data);
    const temp=Number(props.data.main.temp).toFixed(1);
    const date = new Date();
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let day = date.getDate();
    let month = date.getMonth() ;
    let year = date.getFullYear();

    const [city,country]=props.location.split(',');
    console.log(city,country);

    if (props.data) {return(
    <div>
        <div className="card-1" style={{
            display: 'flex',
            gap: '6rem'
        }}>
            <div >
                <div style={{display: 'flex'}}>
                    <div className="city">{city}</div>
                    <img className="icon" src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/>
                </div>
                <div className="description">{props.data.weather[0].main}</div>
                <div style={{display: 'flex'}}>
                    <div className="temperature">
                    {temp}
                    </div>
                    <div>
                    °C
                    </div>
                </div>
                <div >Feels like {props.data.main.feels_like}</div>
            </div>
            <div>
                <div className="day">{dayNames[date.getDay()]}</div>
                <div className="date">{day} {monthNames[month]} {year}</div>
                <div style={{display: 'flex' , marginTop : '1rem'}}>
                    <img src={icon} />
                    <div style={{fontSize : '1rem',letterSpacing: '2px'}}>{country}</div>
                </div>
            </div>
  
        </div>
        <div className='weather-details'>
           <div className='element'>
                <div>Humidity</div> <div>{props.data.main.humidity} %</div>
           </div>
           <div className='element'>
                <div>Pressure  </div> <div>{props.data.main.pressure} hPa</div>
           </div> 
           <div className='element'>
                <div>Wind </div> <div>{props.data.wind.speed} m/s</div>
            </div>       
            
        </div>
    </div>
    )} else{ return(<p></p>)}
}

export default WeatherCard;