"use client "
import React from 'react'
import { BsCloudSun } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import SearchBox from './SearchBox';
import axios from 'axios';

const Navbar = ({location,setData,setLoading,setDataError}) => {

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white w-full">
      <div className=" h-[80px] max-w-7xl w-full flex justify-between items-center px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className=" text-text-color text-3xl">Weather</h2>
          <BsCloudSun className=" text-4xl text-logo-color" />
        </div>

        <section className=" flex gap-2 items-center">
          <div className=" flex items-center gap-1 rounded-md p-2 bg-primary-color">
            <GrLocation  className=" text-2xl text-text-color"/>
            <p className='text-text-color text-base'>{location}</p>
          </div>
          <div >
            <SearchBox setData={setData} setDataError={setDataError}  setLoading={setLoading} />
          </div>
        </section>
      </div>
    </nav>

  )
}

export default Navbar