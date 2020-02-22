import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Button from './components/Button'
import Reps from './components/Reps'

function App() {
  return (
    <div className="App" style={{backgroundImage:'linear-gradient(to right,#36D1DC,#5B86E5)'}}>
      <Route path='/' exact component={Button} /><br></br>
      <Route path='/reps' component={Reps} />
    </div>
  );
}

export default App;
 
