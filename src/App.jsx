import React from 'react'
import { CountryInfo, InputInfo } from './constants'

const App = () => {
  return (
    <div className='App'> 
    <h1 className="title">Country details</h1>
    <InputInfo/>
    <CountryInfo/>  
    </div>
  )
}

export default App