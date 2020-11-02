import React, {useState, useEffect} from 'react'
import DayCard from './DayCard'
import MetCardToday from './MetCardToday'
import MetOffice from './MetOffice'

const MainContainer = () => {

    const [ locationInput, setLocationInput ] = useState('Edinburgh')
    const [ locationKey, setLocationKey ] = useState(3166)
    const [ metLocations, setMetLocations ] = useState()
    const [ todaysWeather, setTodaysWeather ] = useState([])
    const [ locations, setLocations ] = useState()

    const handleLocationChange = (e) => {
        setLocationInput(e.target.value)}

    const handleSetKey = (func) => {
        setLocationKey(locations[locations.findIndex(function(location) {
            return location.location == locationInput })].id)

    }

    let sortedLocationList;
    if(!locations){
    } else {
        sortedLocationList = locations.map( location => {
            return (
                <option value={location.location} key={location.id}>{location.location}</option>)
    })}

   const getTodaysWeather = (weather) => {
        setTodaysWeather(weather)
   }

    return (
        <>
            <h1> { locationInput } </h1>
            <label htmlFor="location-input"> Choose location...
            <input list="location-input" onChange={handleLocationChange} placeholder="Edinburgh"></input>
                <datalist id="location-input" value={locationInput}  placeholder="Choose location...">
                    {sortedLocationList}
                </datalist>
                <button id="set-location-key" onClick={handleSetKey} >Go!</button>
            </label>
            <MetCardToday data={todaysWeather.metOfficeToday} />
            <MetOffice
            getTodaysWeather={getTodaysWeather} 
            locations={locations} setLocations={setLocations} locationKey={locationKey} />
        </>
    )

}

export default MainContainer;