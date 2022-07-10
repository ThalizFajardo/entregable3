import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'

const ResidentInfo = ({characterUrl}) => {
    const[resident,setResident]=useState({})
    
    useEffect(()=>{
    axios.get(characterUrl)
    .then(res=>setResident(res.data))
    },[])
    
    console.log(resident)
    return (
        <div className='residentCard'>
        <p className='status'><span>Status: </span> {resident?.status}</p>
        <img src={resident?.image} />
        <h1>{resident?.name}</h1>
        <p><b>Origin: </b>{resident?.origin?.name}</p>
        <p><b>Episodes where appear: </b> {resident?.episode?.length}</p>
        <p><b>Species: </b>{resident?.species}</p>
        </div>
    );
};

export default ResidentInfo;