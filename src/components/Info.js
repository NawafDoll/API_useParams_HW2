import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function Info() {
   

//    const [state, setstate] = useState([]);
   const {id} = useParams()
    const [Data, setData] = useState([]);
    
    
   
   useEffect(() => {
    
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res)=>{
        console.log(res.data)
        setData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
    
   }, []);
   

  return (
    <div>
        <img src={Data.iamge}></img>
    <h1> { Data.name}</h1> 
    <h1>{Data.species}</h1> 
   <h1>{Data.status}</h1>  
    </div>
  )
}


// const disc = ()=>{
    //     axios.get(`https://rickandmortyapi.com/api/character`).then(res=>{
    //         console.log(res.data);
    //     })
    // }