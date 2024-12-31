import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignupPage, ActivationPage} from './Routes.js' 
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <h1 className="min-h-screen flex items-center justify-center bg-gray-700 text-white py-12 px-4 sm:px-6 lg:px-8 font-extrabold text-3xl">frontend</h1>
      <Routes>
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignupPage/>} />
        <Route path="/activation/:activation_token" element={<ActivationPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;