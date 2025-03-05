import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Signup from '../signup/Signup'

const Loginsignup = () => {

  return (
    <BrowserRouter >
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Loginsignup
