"use client"
import { px } from "framer-motion";
import Image from "next/image";
export default function WeatherDisplay({ data }) {



    const { name, main, weather, wind } = data;

    console.log(data);
    
    
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;



    return (      
        <>
        <div className="text-center backdrop-blur-md overflow-hidden shadow-2xl  w-[90%] mx-auto rounded-3xl mt-8  border  border-gray-400 text-white">
            <h1 className="text-5xl tracking-wider font-semibold mt-5">{name}</h1>
            <div className=" flex mt-5 justify-start gap-3 md:flex-row ">
                <div className="flex w-1/2 justify-center  pl-3 h-32 overflow-hidden items-center ">

                    <p className={`${main.temp > 25 ? 'text-amber-500' : 'text-white'} text-7xl text-shadow-xs  font-bold rounded-xl  flex size-20 mr-auto `}>
                           {Math.floor(main.temp)}°C </p>
                </div>
                   <div className=" flex-col px-1 flex ">
                    <img className="mx-auto" src={iconUrl} width={100} height={50} />
                    <p className="mb-5 font-semibold">{weather[0].description.toUpperCase()}</p>
                    </div>        

            </div>
        </div>
            <div className="grid grid-cols-2 gap-2 w-full mt-5 backdrop-blur-2xl p-5 border border-gray-400 rounded-3xl ">

                <p className="bg-cyan-600  rounded-xl shadow-2xl text-center   py-3">Feels like  <b> {main.feels_like}</b> °C</p>
                <p className="bg-cyan-600  rounded-xl shadow-2xl text-center  py-3">Max temp  <b>{main.temp_max}</b></p>
                <p className="bg-cyan-600  rounded-xl shadow-2xl text-center py-3">Humidity  <b>{main.humidity}%</b></p>
                
                <p className="bg-cyan-600  rounded-xl shadow-2xl text-center py-3">Wind speed  <b>{Math.floor(wind.speed)} m/s</b></p>
               
            </div>


        </>                                                          

    )
}