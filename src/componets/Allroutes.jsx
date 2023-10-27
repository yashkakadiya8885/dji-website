import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Cameradrones from '../pages/Cameradrones'
import Single from '../pages/Single'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signin/>}/>
            <Route path='/cameradrones' element={<Cameradrones/>}/>
            <Route path='/cameradrones/:id' element={<Single/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes