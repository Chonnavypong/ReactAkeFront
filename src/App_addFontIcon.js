import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FontAwesomeIcon icon= {faCoffee} color='yellow' size= '2x' pulse /> Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <FontAwesomeIcon icon= 'coffee' color='yellow' size= '2x' pulse /> Edit <code>src/App.js</code> and save to reload.
        </p>
          <hr/>
        <p>
          <FontAwesomeIcon icon= {faCoffee} color='yellow' size= '2x' pulse={ true } /> boolean pulse = {true} <code>src/App.js</code> and save to reload.
        </p>
        <FontAwesomeIcon icon={faHome} size='10x' color='red' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
