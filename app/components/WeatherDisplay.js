"use client"
import { px } from "framer-motion";
import Image from "next/image";
export default function WeatherDisplay({data}){

    

    const {name, main,weather, wind} = data;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;



    return(
        <div className="text-center p-7 bg-cyan-900 w-1/3 mx-auto rounded-3xl mt-5 border border-gray-400 text-white">
            <h1 className="text-5xl font-semibold ">{name}</h1>
            {/* <Image src={iconUrl} width={50} height={50}/> */}
         <div className=" flex mt-5 justify-start gap-2">

         <p className={`${main.temp > 25 ? 'bg-amber-500' : 'bg-cyan-500'} rounded-xl shadow-2xl py-3 `}> Temp  <b> {main.temp}°C </b></p>
            <p className="bg-cyan-500 rounded-xl shadow-2xl  py-3">Feels like  <b> {main.feels_like}</b> °C</p>
            <p className="bg-cyan-500 rounded-xl shadow-2xl  py-3">Max temp  <b>{main.temp_max}</b></p>
            <p className="bg-cyan-500 rounded-xl shadow-2xl  py-3">Humidity  <b>{main.humidity}%</b></p>
            <p className="bg-cyan-500 rounded-xl shadow-2xl  py-3">Wind speed  <b>{wind.speed} m/s</b></p>
         </div>

           { console.log(data)}
            
           
        </div>
    )
}