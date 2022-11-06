import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Api from './Api'
import Data from './Data'
import Home from './Home'
import Info from './Info'
import LogIn from './LogIn'
import Update from './Update'
export default function Rout() {
  return (
    <div>
      
    <Routes>
        <Route path='/LogIn' element={<LogIn />}/>
        <Route path='/Data' element={<Data />}/>
        <Route path='/Update' element={<Update />}/>
        <Route path='/Api'  element={<Api />}/>
        <Route path='/Info/location/:id' element={<Info />} />
    </Routes>

    </div>
  )
}
