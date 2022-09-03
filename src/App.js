import axios from "axios";
import { useState, useEffect } from "react";

import ContriesList from './components/contriesList';
import NavBar from './components/navbar';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <div class="container">
      <div class="row">
     
     <ContriesList/>
     
     </div>
     </div>
    </div>
  
  )
}

export default App;
