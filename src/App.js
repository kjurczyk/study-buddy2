import React, { Component } from 'react'
import logo from './uf_logo.png';
import './App.css';
//import { UserSession } from 'blockstack'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Study Buddy!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
        <p>
          or
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </header>
    </div>
  );
}

export default App;
