import React, {useContext, useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Trade from './pages/Trade/Trade';
import MainContext from './MainContext';

function App() {
  return (
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trade />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContext>
  );
}

export default App;
