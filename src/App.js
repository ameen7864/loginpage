import './App.css';
import React,{useState} from 'react';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [user, setloginuser] = useState({})
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={ user && user._id ?<Homepage setloginuser={setloginuser}/>:<Login setloginuser={setloginuser}/> }></Route>
          <Route path='/login' element={<Login setloginuser={setloginuser}/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;

