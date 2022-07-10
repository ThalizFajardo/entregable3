import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'

function App() {


  return (
    <div className="App">
     <Location className='test'/>
    <ResidentInfo/>
    </div>
  )
}

export default App
