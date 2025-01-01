import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignupPage, ActivationPage} from './Routes.js' 
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignupPage/>} />
        <Route path="/activation/:activation_token" element={<ActivationPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;