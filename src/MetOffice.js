import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayCard from './DayCard'

const MetOffice = () => {

    const [weatherData, setWeatherData] = useState()
    const [locationID, setLocationId] = useState(3166)

    const url = (locationID, apiKey) => `//datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=3hourly&key=${apiKey}`
    
    let keyList, dayCards;
    if(!weatherData){} else {
    keyList =
        weatherData.Wx.Param.map(( a ) => {
            return (
                <>
                    <h3> {a.$} </h3>
                    <p> {a.name} </p>
                </>
            )
        });
    dayCards = 
        weatherData.DV.Location.Period.map((day) => {
           return( <DayCard day={day} /> )
        })
    }

    useEffect( async () => {
        const result = await axios(
            url(locationID, process.env.REACT_APP_API_KEY)
        )
        setWeatherData(result.data.SiteRep)
    }, [])

    if(!weatherData){
        return(
            <p> ...loading</p>
        )
    }
    return(
        <>
            <div>
                {dayCards}
            </div>
        </>
    )

}

export default MetOffice