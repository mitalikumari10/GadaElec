import React from 'react';
import './App.css';
import Navbar from './components/navBar/NavBar';
import HomePage from './components/homePage/HomePage';
import jethalal from "./components/images/jethalal.png";
function App() {
  return (
    <div className="App">
       <Navbar/>
      <HomePage image={jethalal}/>
      

    
    
    </div>
  );
}

export default App;
 




