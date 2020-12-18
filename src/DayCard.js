import React, { useState } from 'react'

const DayCard = ({day}) => {
    
    const weatherTypeReference = {
        0: " ✨ Clear night",
        1: " ☀️ Sunny day",
        2: " ⛅️ Partly cloudy (night)",
        3: " ⛅️ Partly cloudy (day)",
        4: "Not used",
        5: " 🌫 Mist",
        6: " 🌫 Fog",
        7: " ☁ Cloudy",
        8: " 🌥 Overcast",
        9: " ☔️ Light rain shower (night)",
        10: " ☔️ Light rain shower (day)",
        11: " ☔️ Drizzle",
        12: " ☔️ Light rain",
        13: " 🌧 Heavy rain shower (night)",
        14: " 🌧 Heavy rain shower (day)",
        15: " 🌧 Heavy rain",
        16: " 🌧 🌨 Sleet shower (night)",
        17: "🌧 🌨 Sleet shower (day)",
        18: "🌧 🌨 Sleet",
        19: " ❄️ Hail shower (night)",
        20: " ❄️ Hail shower (day)",
        21: " ❄️ Hail",
        18: " 🌧 🌨 Sleet",
        22: " 🌨 Light snow shower (night)",
        23: " 🌨 Light snow shower (day)",
        24: " 🌨 Light snow",
        25: " 🌨🌨 Heavy snow shower (night)",
        26: " 🌨🌨 Heavy snow shower (day)",
        27: " 🌨🌨 Heavy snow",
        28: " ⛈ Thunder shower (night)",
        29: " ⛈ Thunder shower (day)",
        30: " ⛈ Thunder"
    }

    const weatherByTime = day.Rep.map(( time ) => {
        return (
            <>
                <div className="card-details" key={time.T}>
                    <h4>{(0 + time.$)/60}:00</h4>
                    <p>{weatherTypeReference[time.W]}</p>
                    <p> Temperature: {time.T}</p>
                    <p> Wind speed: {time.S}mph</p>
                    <p> Wind gusts: {time.G}mph </p>
                    <p> Chance of rain: {time.Pp}%</p>
                </div>
            </>
        )
    })
    return(
        <>
            <div className="day-card">
                <h1> {day.value.slice(0,10)} </h1>
                {weatherByTime}
            </div>
        </>
    )
}

export default DayCard