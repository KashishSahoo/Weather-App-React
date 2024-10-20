import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 29.99,
        temp: 30.05,
        tempMin: 30.05,
        tempMax: 30.05,
        humidity: 42,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div
         style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
