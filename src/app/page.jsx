"use client";

import ForecastDetails from "@/components/ForecastDetails";
import Navbar from "@/components/Navbar";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherIcon from "@/components/WeatherIcon";
import WeatherSkeleton from "@/components/WeatherSkeleton";
import {
  convertWindSpeed,
  getDayName,
  getFormattedDate,
  getFormattedTime,
  getTimeFromUnix,
  metersToKilometers,
} from "@/utils/functions";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [dataError, setDataError] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // In api user metric unit to get temperature in Celsius

  useEffect(() => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (postiion) => {

        const { latitude, longitude } = postiion.coords;
         try {
          
           const res = await axios.get(
             `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`

          );
          setData(res.data)
          
          setTimeout(() => {
              setLoading(false);
            }, 500);
          } 
          catch (error) {
          }
      },fetchdefaultdata);
    }
    else{
      fetchdefaultdata()
    }
 
  }, [])

  const fetchdefaultdata = async() =>{
    
    const res =  await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=gujarat&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`

   ); 
   setData(res.data)
   
   setTimeout(() => {
       setLoading(false);
     }, 500);
  }

  const todayData = data?.list[0];


  const uniqueDates = [
    ...new Set(data?.list.map((d) => getFormattedDate(d.dt_txt))),
  ];

  // Filtering data to get the first entry after 6 AM for each unique date
  const firstDataForEachDate = uniqueDates.map((date) => {
    return data?.list.find((entry) => {
      const entryDate = getFormattedDate(entry.dt_txt);
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });

  return (
    loading?<WeatherSkeleton /> : (<div className=" flex flex-col gap-4 bg-primary-color w-full min-h-screen overflow-hidden">
      <Navbar location={data?.city.name} setDataError={setDataError} setLoading={setLoading} setData={setData} />

      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4 ">
        {!(dataError === "")?<div className="container text-red-600 bg-red-300">{dataError}</div>:<></>}
        <section className=" space-y-4">
          <div className=" space-y-2">
            <h2 className=" flex gap-1 text-2xl items-end">
              <p>{getDayName(todayData?.dt_txt)}</p>
              <p className=" text-lg">
                ({getFormattedDate(todayData?.dt_txt)})
              </p>
            </h2>

            {/* 1st row Today Temp data */}
            <div className="container ">
              <div className="container w-fit bg-logo-color gap-4 items-center shrink-0 justify-center">
                <div className="flex flex-col max-sm:hidden">
                  <p className=" capitalize text-center">
                    {todayData?.weather[0].description}
                  </p>
                  <WeatherIcon
                    icon={todayData?.weather[0]?.icon}
                    description={todayData?.weather[0]?.description}
                  />
                </div>

                <div className=" flex flex-col px-4 ">
                  <span className="text-5xl">
                    {Math.floor(todayData?.main.temp)}°
                  </span>
                  <p className="text-xs space-x-1 whitespace-nowrap">
                    <span> Feels like</span>
                    <span>{Math.floor(todayData?.main.feels_like)}°</span>
                  </p>
                  <p className="text-xs space-x-2">
                    <span>
                      {Math.floor(todayData?.main.temp_min)}
                      °↓{" "}
                    </span>
                    <span>
                      {" "}
                      {Math.floor(todayData?.main.temp_max)}
                      °↑
                    </span>
                  </p>
                </div>
              </div>
              {/* time  and weather  icon */}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                {data?.list.map(
                  (d, i) =>
                    (uniqueDates[0] === getFormattedDate(d.dt_txt) ||
                      (uniqueDates[1] === getFormattedDate(d.dt_txt) &&
                        (getFormattedTime(d.dt_txt) === "00:00"))) && (
                      <div
                        key={i}
                        className="flex flex-col justify-between gap-2 items-center text-xs font-semibold "
                      >
                        <p className="whitespace-nowrap">
                          {getFormattedTime(d.dt_txt)}
                        </p>

                        <WeatherIcon
                          icon={d?.weather[0]?.icon}
                          description={d?.weather[0]?.description}
                        />
                        <p>{Math.floor(d?.main.temp)}°</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* 2nd row data  */}

          <div className="container overflow-x-auto justify-between gap-4 px-4 pr-10">
            <WeatherDetails
              visability={metersToKilometers(todayData?.visibility)}
              airPressure={`${todayData?.main.pressure} hPa`}
              humidity={`${todayData?.main.humidity}%`}
              sunrise={getTimeFromUnix(data?.city.sunrise)}
              sunset={getTimeFromUnix(data?.city.sunset)}
              windSpeed={convertWindSpeed(todayData?.wind.speed)}
            />
          </div>
        </section>

        {/* 5 day forcast data  */}
        <section>
          <p className="text-2xl">Forcast</p>
          {firstDataForEachDate.map((d, i) => (
            <ForecastDetails
              key={i}
              description={d?.weather[0]?.description}
              weatehrIcon={d?.weather[0]?.icon}
              date={getFormattedDate(d?.dt_txt)}
              day={getDayName(d?.dt_txt)}
              feels_like={Math.floor(d?.main.feels_like)}
              temp={Math.floor(d?.main.temp)}
              temp_max={Math.floor(d?.main.temp_max)}
              temp_min={Math.floor(d?.main.temp_min)}
              airPressure={`${d?.main.pressure} hPa `}
              humidity={`${d?.main.humidity}% `}
              sunrise={getTimeFromUnix(data?.city.sunrise)}
              sunset={getTimeFromUnix(data?.city.sunset ?? 1702517657)}
              visability={`${metersToKilometers(d?.visibility ?? 10000)} `}
              windSpeed={`${convertWindSpeed(d?.wind.speed ?? 1.64)} `}
            />
          ))}
        </section>
      </main>
    </div>)
  );
};

export default Home;
