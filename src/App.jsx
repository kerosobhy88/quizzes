
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Timer from './Timer'
import Home from './Home'
import Html from './Html';
import Css from './Css';
import React from './React';
import { useState } from 'react';
import Darklight from '../public/cobonands/Darklight';

function App() {
  const [darklight,setdarklight]=useState(false)
  return (
    <>
   <BrowserRouter basename="/quizzes">
  <Routes>
     <Route path="/" element={
       <>
         <Darklight darklight={darklight} setdarklight={setdarklight}/>
         <Home />
       </>
     } /> 
    <Route path="/Repeat" element={<Timer darklight={darklight} setdarklight={setdarklight}/>}/>
    <Route path="/Home" element={<Timer darklight={darklight} setdarklight={setdarklight}/>}/>
    <Route path="/Exit" element={<Home />}/>
     <Route path="/Html" element={<Html darklight={darklight} setdarklight={setdarklight}/>}/>
    <Route path="/Css" element={<Css darklight={darklight} setdarklight={setdarklight}/>}/>
   <Route path="/React" element={<React darklight={darklight} setdarklight={setdarklight}/>}/>


  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
