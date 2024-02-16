import Image from 'next/image'
import React from 'react'

const WeatherIcon = ({icon,description}) => {
  return (
    <div title={description} className="relative h-20 w-20">
      <Image
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      />
    </div>
  )
}

export default WeatherIcon