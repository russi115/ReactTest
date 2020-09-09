import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
       <Navigation titulo="Mi primera navagación"/>
    </div>
  );
}

export default App;
