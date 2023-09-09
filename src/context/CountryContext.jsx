import React, { createContext, useContext, useEffect, useState } from "react";
import { CountryListContext } from "./CountryListContext";

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
    const { countries } = useContext(CountryListContext);

    let [selectedCountry, setSelectedCountry] = useState();
    let [countryDetails, setCountryDetails] = useState();

    useEffect(() => {
        let details = countries?.filter(country => 
            country.name === selectedCountry
        );

        setCountryDetails(details[0]);
    }, [selectedCountry]);

    const contextValue = { selectedCountry, setSelectedCountry, countryDetails };

    return (
        <CountryContext.Provider value={ contextValue }>
            { children }
        </CountryContext.Provider>
    );
}