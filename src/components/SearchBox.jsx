"use client"
import axios from "axios";
import React, { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = ({setData,setLoading,setDataError}) => {


  const inputRef = useRef("");

  const fetchData = async() =>{
   
    if(!(inputRef.current.value.trim()==="")){

      try {
      setLoading(true);
  
      const res =  await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value.trim()}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  
     ); 
     setData(res.data)
     setDataError("")
     setTimeout(() => {
         setLoading(false);
       }, 500);
     } catch (error) {
      setLoading(false);
      setDataError("Please enter valid location")
     }
    }
    
  }

  
 

  const handleSubmit = (e) => {
    if (e.key === "Enter" && !(inputRef.current.value.trim()==="")){
     
        fetchData() 
      
    }
  
    // console.log(inputRef.current.value);
  };

  return (
    <div onKeyDown={(e)=>handleSubmit(e)}  className={" flex relative items-center h-10"}>
      <input
      ref={inputRef}
        type="text"
        placeholder="Search city name..."
        className=" focus:outline-none px-4 py-2 w-[230px] border 
        border-gray-300 rounded-l-md focus:border-blue-500 h-full"
      />
      <button onClick={fetchData} className=" px-4 py-2 bg-logo-color text-white rounded-r-md hover:opacity-80 h-full">
        <IoSearchSharp />
      </button>
    </div>
  )
}

export default SearchBox