import logo from './logo.svg';
import './App.css';
import Parent from "./Parent.JS";
import { useContext } from 'react';
import counterContext from './counterContext';

function App() {


  return (
    <contextReducer.Provider value={9}  >
    <div className="App">
     
     <Parent/>
    </div>
    </contextReducer.Provider>
  );
}

export default App;
