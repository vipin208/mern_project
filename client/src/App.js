import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
   <>
  <Router>

   <Navbar></Navbar> 
    <Routes>
     <Route  exact path="/" element={ <Home/>} ></Route>
     <Route  exact path="/Home" element={ <Home/>} ></Route>
     <Route  exact path="/About" element={ <About/>} ></Route>
     <Route  exact path="/Contact" element={ <Contact/>} ></Route>
     <Route  exact path="/Signup" element={ <Signup/>} ></Route>
     <Route  exact path="/Login" element={ <Login/>} ></Route>
     <Route  exact path="*" element={ <Errorpage/>} ></Route>
    </Routes>
  </Router>

   </>
  );
}

export default App;
