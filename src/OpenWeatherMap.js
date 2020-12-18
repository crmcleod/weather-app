import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OpenWeatherMap = () => {

    const [ openWeatherData, setOpenWeatherData ] = useState()
    const [ location, setLocation ] = useState("Edinburgh")

    useEffect( async () => {
        // setLocationId(locationKey)
        const url = (location, apiKey) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`
        const result = await axios( url(location, process.env.REACT_APP_API_KEY_OPEN_WEATHER) )
        // const locations = await axios(url('sitelist', process.env.REACT_APP_API_KEY))

        // const adjustedLocations = locations.data.Locations.Location.map((location) => {
        //     return (
        //         {
        //             location: location.name,
        //             id: location.id
        //         }
        //     )
        // })

        setOpenWeatherData(result);
        console.log(result)
        // setLocations(adjustedLocations);
        // getTodaysWeather({metOfficeToday: result.data.SiteRep.DV.Location.Period[0].Rep[result.data.SiteRep.DV.Location.Period[0].Rep.map(function (e) {
        // return e.$ }).indexOf("720")]})
    }, [])

    return (
        <h1>
            "I'm the open weather mapp api"
        </h1>
    )
}
export default OpenWeatherMap;