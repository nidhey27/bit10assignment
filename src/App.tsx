import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu';
import Hotels from './components/Hotels';
function App() {
  return (
    <div className="App">
      <Header />
      
      <Hotels />
    </div>
  );
}

export default App;
