import { useContext, useState } from "react";
import './input-form.scss'
import React from 'react'
import { CountryListContext, CountryContext } from "../constants";
const InputInfo = () => {
    const {countries}=useContext(CountryListContext)
    const {selectedCountry,setSelectedCountry}=useContext(CountryContext)
    //  console.log(selectedCountry) 
    const handleCountrySelection = (e) => {
        setSelectedCountry(e.target.value);
        // console.log(e.target.value)
    }

  return (
    <div className="form-container">
        <form action="" className="country-selection-form">
            <label htmlFor="country"> select a country </label>
            <select name="selectedCountry" onChange={handleCountrySelection} value={selectedCountry} id="country">
                <option value="">select a country</option>

                {countries?.map(country=>{
                    return(
                        <option value={country.name} key={country.alpha3Code} >
                            {country.name}
                        </option>
                    )
                })}

            </select>
        </form>
    </div>
  )
}

export default InputInfo
