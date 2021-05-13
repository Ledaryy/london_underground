import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Map from './components/map'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
    )
}

// map module
Map()

export default App;

