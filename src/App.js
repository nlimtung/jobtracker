import './App.css';
import React, { useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import HomePage from './pages/HomePage/HomePage';
import AppliedJobsPage from './pages/AppliedJobsPage/AppliedJobsPage';
import RejectedJobsPage from './pages/RejectedJobsPage/RejectedJobsPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {

  const [user, setUser] = useState(null)

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData)
  }

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if (token) {
      let userDoc = JSON.parse(window.atob(token.split('.')[1])).user
      setUser(userDoc)
    }

}, [])
   


  return (
    <div className='App'>
        {user ? 

      <Switch>

        <Route path = "/applied" render = {(props) =>(
          <AppliedJobsPage {...props}/>
        )}/> 
        <Route path = "/rejected" render = {(props) =>(
          <RejectedJobsPage {...props}/>
        )}/> 
        <Route path = "/favourites" render = {(props) =>(
          <FavouritesPage {...props}/>
        )}/> 

        <Route path = "/home" render = {(props) =>(
          <HomePage {...props}/>
        )}/> 
        
         <Redirect to="/home" />


      </Switch>:

        <AuthPage
        setUserInState = {setUserInState}/>}



      
    </div>
  );
}

export default App;
