import React from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimePickerCustom from './components/DateTimePickerCustom';
import DateTimePickerNormal from './components/DateTimePickerNormal';

function App() {
  return (
    <div className="App">
      <DateTimePickerCustom />
      <DateTimePickerNormal />
    </div>
  );
}

export default App;
