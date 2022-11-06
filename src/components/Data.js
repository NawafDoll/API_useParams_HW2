import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Update from './Update';
export default function Data() {
    const [allData, setAllData] = useState([{}]);
    useEffect(() => {
        axios.get(`https://6362424c7521369cd068e027.mockapi.io/ToDO`).then((res)=>{
            console.log(res.data)
            setAllData(res.data)
        })
    },[]);

    const deleteData = (id)=>{
        axios.delete(`https://6362424c7521369cd068e027.mockapi.io/ToDO/${id}`).then((res)=>{
            setAllData(allData.filter((del)=> del.id != id ))
        })
    }

  return (
    <div>
    
    <div className='data'>
    
    {allData.map((e)=>
    <div>
        <h1>Data</h1>
     <p>{"Name: "}{e.name}</p>
     <p>{"Password: "}{e.pass}</p>
     <Button margin={"0"} border={"none"} bg={"blue"} color={"white"} padding={"10"} onClick={()=>deleteData(e.id)}>Delete</Button>
     <Link to="/Update">
                     <button onClick={() => localStorage.setItem("id", e.id)}>Update</button></Link>
     </div>
     )}
    </div>
    </div>
  )
}
