import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
// import Register from './components/Register';
import Navbar from "./Navbars/Navbar";
import Routers from "./Navbars/Routers";

// import RegisterList from './components/RegisterList';
 

function App() {
  return (
    <BrowserRouter>
       
        <div className="App">
           
          <Navbar />
          <Routers />
        </div>
      
    </BrowserRouter>
  );
}

export default App;
