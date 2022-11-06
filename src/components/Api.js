import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
export default function Api() {
    


    const [state, setstate] = useState([{}]);
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character').then((res) =>{
            console.log(res.data)
          
            setstate(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

   
  return (
    <div>
     {state.map((e)=>(
        <div>
     <img src={e.image}></img> 
     <br/>
      <p>{`name:${e.name}`}</p>
      <Link to={`/Info/location/${e.id}`}><button>Button</button></Link>
      
      </div>
      ))}
     
    </div>
  )
}
