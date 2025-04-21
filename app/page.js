'use client'

import WeatherDisplay from "./components/WeatherDisplay"
import { useState } from "react"
import SearchBar from "./components/Searchbar"
import { motion, AnimatePresence } from 'framer-motion'


export default function Home() {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleSearch = async (location) => {

        setWeatherData(null)
        setLoading(true)
        setError(null)

        try {
            const res = await fetch(`/api/weather?location=${location}`)
            const data = await res.json()

            if (res.ok) {
                setWeatherData(data)
            } else {
                setError(data.message)
            }


        } catch (error) {
            setError('failed to load data')
        }

        setLoading(false)


    }

    return (

        <div className="min-w-screen  p-10 ">
            <h1 className="text-5xl font-semibold text-center">Weather App</h1>


            <SearchBar onSearch={handleSearch} loading={loading} />
            <div>

                <AnimatePresence>

                    {loading && (
                        <motion.div
                            key='loading'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center bg-gray-500"
                        >
                            <p>Loading...</p>

                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {weatherData && (
                <motion.div
                    key={weatherData.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}>
                    <WeatherDisplay data={weatherData} />
                </motion.div>
            )}


        </div>

    )
}