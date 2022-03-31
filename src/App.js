import React, {useContext, useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trade from './pages/Trade/Trade';
import MainContext from './MainContext';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Trade />} />
        </Routes>
      </BrowserRouter>
    </MainContext>
  );
}

export default App;
