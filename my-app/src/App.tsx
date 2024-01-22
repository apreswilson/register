import React from 'react';
import './App.css';
import Catalog from './components/catalog/catalog';
import Functions from './components/functions/functions';
import Keypad from './components/keypad/keypad';
import List from './components/list/list';

function App() {
  return (
    <div className="App">
      <div className="top-row">
        <Catalog />
        <Functions />
      </div>
      <div className="bottom-row">
        <List />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
