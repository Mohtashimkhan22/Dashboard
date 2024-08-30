// src/App.jsx
import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Herosection from './components/Herosection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Herosection/>
    </div>
  );
}

export default App;
