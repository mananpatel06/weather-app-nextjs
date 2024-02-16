import React from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";

const ForecastDetails = ({
  date,
  day,
  temp,
  feels_like,
  description,
  visability,
  humidity,
  windSpeed,
  airPressure,
  temp_max,
  temp_min,
  sunrise,
  sunset,
  weatehrIcon,
}) => {
  return (
    <div className="container gap-4 my-4">
      <section className=" container w-fit bg-logo-color flex gap-4 items-center px-4 ">
        <div className=" flex flex-col gap-1 items-center max-sm:hidden">
          <WeatherIcon icon={weatehrIcon} description={description} />
          <p>{date}</p>
          <p className="text-sm">{day} </p>
        </div>

        {/* Temp data  */}
        <div className="flex flex-col px-4 ">
          <span className="text-5xl">{temp}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span> Feels like</span>
            <span>{feels_like}°</span>
          </p>
          <p className="text-xs space-x-2">
            <span>
              {temp_min}
              °↓{" "}
            </span>
            <span>
              {" "}
              {temp_max}
              °↑
            </span>
          </p>
          <p className="capitalize"> {description}</p>
        </div>
      </section>
      {/* right */}
      <section className=" overflow-x-auto flex justify-between gap-4 px-4  w-full pr-10">
        <WeatherDetails
          visability={visability}
          humidity={humidity}
          windSpeed={windSpeed}
          airPressure={airPressure}
          sunrise={sunrise}
          sunset={sunset}
        />
      </section>
    </div>
  );
};

export default ForecastDetails;
