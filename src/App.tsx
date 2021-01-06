import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.scss';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { getActualUser } from './services/auth.service';

function App() {
  
  const history = useHistory();

  useEffect(() => {
    if(getActualUser()) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  },[]);
  return (
    <div className="app">
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
