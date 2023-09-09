import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './App.jsx';
import { CountryListContextProvider } from './context/CountryListContext';
import { CountryContextProvider } from './context/CountryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CountryListContextProvider>
            <CountryContextProvider>
                <App />
            </CountryContextProvider>
        </CountryListContextProvider>
    </React.StrictMode>
);