import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import ConfigForm from './components/ConfigForm';
import ConfigList from './components/ConfigList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React + Redux Toolkit + REST API</h1>
      <UserComponent />
      <ConfigForm />
      <ConfigList />
      </header>
    </div>
  );
}

export default App;
