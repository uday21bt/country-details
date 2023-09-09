import { useContext,useEffect,useState } from "react";
import './country-info.scss'
import { CountryContext } from "../constants";

import React from 'react'

const CountryInfo = () => {
  
    const {countryDetails}=useContext(CountryContext)

    const [country,setCountry]=useState(null)
    useEffect(()=>{
        setCountry(countryDetails)

    },[countryDetails])


  return (
    country && <div className="country-info">
        <h1>Country Name: {country?.name}</h1>

<img src={country?.flags.png} alt={country?.name} />

<h1>Capital: {country?.capital}</h1>

<h1>Region: {country?.region}</h1>

<h1>Time Zone: {country?.timezones[0]}</h1>

<h1>Population: {country?.population.toLocaleString()}</h1> 
     </div>
  )
}

export default CountryInfo