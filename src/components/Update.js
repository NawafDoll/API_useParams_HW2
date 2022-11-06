import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Update() {
    const navigate = useNavigate()

 const [name, setName] = useState("");
 const [pass, setPass] = useState("");
 const [id, setId] = useState("");

 useEffect(() => {
    setName(localStorage.getItem("Name"))
    setPass(localStorage.getItem("Pass"))
    setId(localStorage.getItem("Id"))
 }, []);

 const updateData = ()=>{
    axios.put(`https://6362424c7521369cd068e027.mockapi.io/ToDO/${id}`,{name,pass}).then((res)=>{
        console.log(res.id)
        navigate("/Api")
    }).catch((err)=>{
        console.log(err)
    })
 }
  return (
    <div>
      <input onChange={(e)=>{setName(e.target.value)}}></input>
      <input onChange={(e)=>{setPass(e.target.value)}}></input>
      <Link to={"/Api"}><button onClick={updateData}>Button</button></Link>
    </div>
  )
}
