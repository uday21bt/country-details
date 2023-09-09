import React, { createContext, useEffect, useState } from "react";

export const CountryListContext = createContext();

export const CountryListContextProvider = ({ children }) => {
    let [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            let result = await fetch('https://restcountries.com/v2/all').then(res => {
                return res.json();
            }).then(response => {
                return response;
            });
            setCountries(result);
        }

        getCountries();
    }, );
    
    const contextValue = { countries };

    return (
        <CountryListContext.Provider value={ contextValue }>
            { children }
        </CountryListContext.Provider>
    );
}