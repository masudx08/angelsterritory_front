import React, {useContext, useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trade from './pages/Trade/Trade';
import MainContext, { MyContext } from './MainContext';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Profile from './pages/Profile/Profile';
import History from './pages/History/History';

import 'react-multi-carousel/lib/styles.css';
import { profileFetch } from './utils/services';
import io from 'socket.io-client'
let socket;
function App() {
  const { setUser} = useContext(MyContext)

  useEffect(()=>{
    profileFetch().then(res=>setUser(res))
    socket = io("http://localhost:5000");
    socket.on('wow', (res)=>{
      console.log(res, 'result')
    })
        
  },[])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Trade />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
