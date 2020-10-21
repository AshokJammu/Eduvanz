import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
// import Register from './components/Register';
import Navbar from './Navbars/Navbar';
import Routers from './Navbars/Routers';
 
// import RegisterList from './components/RegisterList';
import AppProvider from './utils/AppProvider';

function App() {
  return (
    <BrowserRouter>
    
    <AppProvider>
      <div className="App">
        <h1>Registration</h1>
         <Navbar />
         <Routers />
        {/* <Register/> */}
        {/* <RegisterList /> */}
      </div>

    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
