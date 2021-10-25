import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react/cjs/react.development';import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name='harry';
function App() {
  const [darkMode,SetDarkMode]=useState('');
  let toggler= ()=>{
    if(darkMode==='dark'){
    SetDarkMode('light');
      document.body.style.backgroundColor='#042743';
  }
    else{
    SetDarkMode('dark');
    document.body.style.backgroundColor='white';
  }
  }
  return (
    <>
    <Router>
    <NavBar title="TextUtils" about="About us" mode={darkMode} toggle={toggler}/>
    <div className="container my-3">
   
    <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/home">
          <TextForm heading="Enter your text here"/>
          </Route>
        </Switch>
        </div>
   </Router>
    </>
    
   
  );
}

export default App;
