import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React + Redux Toolkit + REST API</h1>
      <UserComponent />
      </header>
    </div>
  );
}

export default App;
