'use client'

import { useState } from "react"

export default function SearchBar({onSearch, loading}){

    const [location, setLocation] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(location.trim()){
            onSearch(location);
        }
    }

    return(
       <div className="text-center mt-5">

       <form onSubmit={handleSubmit}>

            <input type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="bg-gray-100 text-black rounded-full outline-0 border w-80 lg:w-[60rem] mx-3 border-gray-500 px-3 py-2"
            placeholder="Enter location"
            />

             <button className="  rounded-full outline-0 shadow-2xl bg-sky-500 w-80 lg:w-[60rem] mt-3 lg:w-[60rem] mx-3  px-2 py-2"
             disabled={loading}>
                {loading ? 'Searching...' : 'Search'}</button>
        </form>
                 </div>
    )
}