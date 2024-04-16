import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";

export interface WeatherDetailProps {
    visibility: string;
    humidity: string;
    windSpeed: string;
    airPressure: string;
    sunrise: string;
    sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {

    const {visibility= '25km', humidity= '61%', windSpeed= '7 km/h', airPressure= '1012 hPa', sunrise= '6:20', sunset= '18:48'} = props;

  return <>
     <SingleWeatherDetail icon={<IoEyeOutline />} information='Visibility' value={visibility}/>
     <SingleWeatherDetail icon={<WiHumidity />} information='Humidity' value={humidity}/>
     <SingleWeatherDetail icon={<MdOutlineAir />} information='WindSpeed' value={windSpeed}/>
     <SingleWeatherDetail icon={<IoMdSpeedometer />} information='AirPressure' value={props.airPressure}/>
     <SingleWeatherDetail icon={<GiSunrise />} information='Sunrise' value={sunrise}/>
     <SingleWeatherDetail icon={<GiSunset />} information='Sunset' value={sunset}/>
     
  </>;
}


export interface SingleWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value:  string;
}

function  SingleWeatherDetail(props: SingleWeatherDetailProps) {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-slate/80'>
            <p className='whitespace-nowrap'>{props.information}</p>
            <div className='text-3xl'>{props.icon}</div>
            <p>{props.value}</p>
        </div>
    );
};