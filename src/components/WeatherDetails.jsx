import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

function SingleWeatherDetail(props) {
    return (
        <div className="flex flex-col justify-between gap-2 items-center text-sm font-semibold text-black/80">
            <p className="whitespace-nowrap">{props.information}</p>
            <div className="text-4xl">{props.icon}</div>
            <p>{props.value}</p>
        </div>
    );
}

const WeatherDetails = ({
    visability,
    humidity,
    windSpeed,
    airPressure,
    sunrise,
    sunset,
}) => {
    return (
        <>
            <SingleWeatherDetail
                icon={<LuEye />}
                information="Visability"
                value={visability}
            />
            <SingleWeatherDetail
                icon={<FiDroplet />}
                information="Humidity"
                value={humidity}
            />
            <SingleWeatherDetail
                icon={<MdAir />}
                information="Wind speed"
                value={windSpeed}
            />
            <SingleWeatherDetail
                icon={<ImMeter />}
                information="Air Pressure"
                value={airPressure}
            />
            <SingleWeatherDetail
                icon={<LuSunrise />}
                information="Sunrise"
                value={sunrise}
            />
            <SingleWeatherDetail
                icon={<LuSunset />}
                information="Sunset"
                value={sunset}
            />
        </>
    );
};

export default WeatherDetails;
