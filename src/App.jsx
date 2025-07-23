import './App.css'
import {Routes, Route,HashRouter } from 'react-router-dom';
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
   <HashRouter>
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
  </HashRouter>
    </>
  )
}

export default App
