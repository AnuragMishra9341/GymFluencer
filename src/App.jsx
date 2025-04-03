

import React from "react";
import { Routes,Route } from 'react-router-dom';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ExerciseDetails from "./components/ExerciseDetails";
import JoinNow from "./components/JoinNow";
function App() {
 

  return (
   <Box>
        <Navbar/>
    <Routes>
       <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchBar/>}></Route>
          <Route path="search/description" element={<ExerciseDetails/>}></Route>
          <Route path="/joinNow" element={<JoinNow/>}></Route>
    </Routes>
    </Box>
    
    
  )
}

export default App
