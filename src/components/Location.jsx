import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import ResidentInfo from './ResidentInfo'

const Location = () => {

    const [location, setLocation] = useState(0);// state for get location 
    const [searchValue, setSearchValue] = useState('type a location id')// state for search


    /////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {//peticion
        const random = Math.floor(Math.random() * 126) + 1//randonizing location
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    }, [])
    ///////////////////////////////////Funciones.........///////////////////////////////////////////
    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then(res => setLocation(res.data))
    }

    /////////////////////////////////////////////////////////////////////////////////////    
  //      console.log(location)//see what's in res.data

    /////////////////////////////////////////////visualizing...
    return (
        <div className='location'>
            <div className='locationInfo'>
                <h1>{location?.name}</h1>
                <p><b>Type:</b>{location?.type}</p>
                <p><b>Dimension: </b>{location?.dimension}</p>
                <p><b>Population: </b>{location?.residents?.length}</p>
            </div>
            <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <button onClick={searchType}><b>Search</b></button>
           <div className='residentsContainer'>
           <ul>
                {location?.residents?.map((characterUrl) => (
                    <li key={characterUrl}>
                        <ResidentInfo  characterUrl={characterUrl}/>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Location