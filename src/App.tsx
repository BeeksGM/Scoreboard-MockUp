import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compenents/Header';
import Scoreboard from './compenents/Scoreboard';
import Console from './compenents/Console';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <div className='container'>
     <Scoreboard></Scoreboard>
     <hr className='separator'/>
     <Console></Console>
     </div>
     
    </div>
  );
}

export default App;
