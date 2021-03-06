import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayCard from './DayCard'

const MetOffice = ({
    getTodaysWeather, 
    locations, setLocations, locationKey, handleSetKey}) => {

    const [weatherData, setWeatherData] = useState();
    const [locationID, setLocationId] = useState(locationKey);


    useEffect( async () => {
        setLocationId(locationKey)
        const url = (locationID, apiKey) => `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=3hourly&key=${apiKey}`
        const result = await axios( url(locationID, process.env.REACT_APP_API_KEY) )
        const locations = await axios(url('sitelist', process.env.REACT_APP_API_KEY))

        const adjustedLocations = locations.data.Locations.Location.map((location) => {
            return (
                {
                    location: location.name,
                    id: location.id
                }
            )
        })

        setWeatherData(result.data.SiteRep);
        setLocations(adjustedLocations);
        getTodaysWeather({metOfficeToday: result.data.SiteRep.DV.Location.Period[0].Rep[result.data.SiteRep.DV.Location.Period[0].Rep.map(function (e) {
        return e.$ }).indexOf("720")]})
        console.log(result)
    }, [locationID])

    let dayCards;
    if(!weatherData){} else {
    dayCards = 
        weatherData.DV.Location.Period.map((day) => {
           return( <DayCard key={day.Rep.$} day={day} /> )
        })
    }

    const handleClick = () => {
        setLocationId(locationKey)
        handleSetKey()
    }
    if(!weatherData){
        return(
            <h2 id="loading"> ...loading...</h2>
        )
    }
    return(
        <>
            <div>
                <button onMouseDown={handleClick} onMouseLeave={handleClick}>Re-render</button>
                {dayCards}
            </div>
        </>
    )}

// }

export default MetOffice