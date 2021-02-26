
import './App.css';
import Parent from "./Parent.JS";
import counterContext from './counterContext';
import { useState } from 'react';

function App() {
  let CountState= useState(29)
  
  return (
    <counterContext.Provider value={CountState}>
    <div className="App">
     
     <Parent/>
    </div>
    </counterContext.Provider>
  );
}

export default App;
