import React, {useState, useEffect} from 'react'
import MetOffice from './MetOffice'

const MainContainer = () => {

    const [ locationInput, setLocationInput ] = useState('Edinburgh')
    const [ todaysWeather, setTodaysWeather ] = useState()

    const handleLocationChange = (e) => {
        setLocationInput(e.target.value)
    }

   const getTodaysWeather = (weather) => {
        setTodaysWeather({...todaysWeather, weather})
   }

    return (
        <>
            <h1> { locationInput } </h1>
            <label htmlFor="location-input"> Choose location...</label>
            <input id="location-input" type="text" value={locationInput} onChange={handleLocationChange} placeholder="Choose location..."/>
            <MetOffice getTodaysWeather={getTodaysWeather} />
        </>
    )

}

export default MainContainer;