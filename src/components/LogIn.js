import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Input,Button, Box,Text } from '@chakra-ui/react'
import axios from 'axios';
export default function LogIn() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

   
        const postData = ()=>{
            if(name === '' || pass === ''){
                alert("required")
            }else{
                alert(`Welcome ${name}`)
            }
            axios.post(`https://6362424c7521369cd068e027.mockapi.io/ToDO`,{name,pass}).then((res)=>{
            console.log(res.data)
            localStorage.setItem("Name",res.data.name)
            localStorage.setItem("Password",res.data.pass)
            localStorage.setItem("id",res.data.id)
        })
        navigate("/Data")
        }
        
    
    
    const click = ()=>{
        
    }
    
  return (
    <Box className='parent'>
    <h1>Sign In</h1>
    <Box className='card'>
        <Box>
        <h2> User Name</h2>
        <Input onChange={(e)=>setName(e.target.value)} type={"text"}></Input>
        </Box>
        <Box>
        <h2> Password</h2>
        <Input onChange={(e)=>setPass(e.target.value)} type={"password"}></Input>
        </Box>
      <Button onClick={postData}>LogIn</Button>
    </Box>
    </Box>
  )
}
