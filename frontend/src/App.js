import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignupPage, ActivationPage} from './Routes.js' 
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';

const App = () => {
  useEffect(() => {
    Store.dispatch({type: 'LoadUserRequest'});
  });
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignupPage/>} />
        <Route path="/activation/:activation_token" element={<ActivationPage/>} />
      </Routes>
      <ToastContainer position='bottom-center' theme='dark'/>
    </BrowserRouter>
  )
}

export default App;