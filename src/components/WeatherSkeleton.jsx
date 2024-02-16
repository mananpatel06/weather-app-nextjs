import React from "react";
import { BsCloudSun } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import SearchBox from "./SearchBox";

const WeatherSkeleton = () => {
  return (
    <>
      <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
        <div className="h-[80px] max-w-7xl w-full flex justify-between items-center px-3 mx-auto">
          <div className="flex items-center justify-center gap-2">
            <h2 className=" text-text-color text-3xl">Weather</h2>
            <BsCloudSun className=" text-4xl text-logo-color" />
          </div>

          <section className=" flex gap-2 items-center">
            
            <div className=" flex items-center gap-1 rounded-md p-2 bg-primary-color">
              <GrLocation className=" text-2xl text-text-color " />
              <p className="text-text-color text-base">Loading ...</p>
            </div>
            <div>
              <SearchBox />
            </div>
          </section>
        </div>
      </nav>
      <section className="space-y-4 p-4">
        <div className="h-32 p-5 bg-gray-300 rounded" />
        <div className="flex gap-5">
          <div className="h-32 w-44 p-5 bg-gray-300 rounded" />
          <div className="h-32 w-full p-5 bg-gray-300 rounded" />
        </div>

        {/* 7 days forecast skeleton */}
        <div className="flex flex-col gap-4 animate-pulse">
          <p className="text-2xl h-8 w-36 bg-gray-300 rounded"></p>

          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="h-32 p-5 bg-gray-300 rounded" />
          ))}
        </div>
      </section>
    </>
  );
};

export default WeatherSkeleton;
