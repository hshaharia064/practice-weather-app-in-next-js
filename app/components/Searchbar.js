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
            className="bg-gray-500 rounded-xl outline-0 border w-80 mx-3 border-gray-500 px-2 py-2"
            placeholder="Enter location"
            />

             <button className="px-4 rounded-xl py-2 bg-cyan-600  disabled:bg-gray-700"
             disabled={loading}>
                {loading ? 'Searching...' : 'Search'}</button>
        </form>
                 </div>
    )
}