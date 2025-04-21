import { NextResponse } from "next/server";

export  async function GET(request){

    const {searchParams} = new URL(request.url);
    const apiKey = process.env.WEATHER_API_KEY;
    const location = searchParams.get('location');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;




    try{
        const response = await fetch(url)
        const data = await response.json()

        if(!response.ok){
            return NextResponse.json(
                {message : data.message || "something went wrong"}
                , {status: response.status})
        }

        return NextResponse.json(data, {status : 200});
    }catch(err){
        return NextResponse.json(
            {message : 'Internal server error'}, 
            {status : 500}
        )
    }

}














