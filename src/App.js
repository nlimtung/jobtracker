import './App.css';
import React, { useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AppliedJobsPage from './pages/AppliedJobsPage/AppliedJobsPage';
import RejectedJobsPage from './pages/RejectedJobsPage/RejectedJobsPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';

function App() {
   


  return (
    <div className='App'>
      <Switch>
        <Route path = "/home" render = {(props) =>(
          <HomePage {...props}/>
        )}/> 
        <Route path = "/applied" render = {(props) =>(
          <AppliedJobsPage {...props}/>
        )}/> 
        <Route path = "/rejected" render = {(props) =>(
          <RejectedJobsPage {...props}/>
        )}/> 
        <Route path = "/favourites" render = {(props) =>(
          <FavouritesPage {...props}/>
        )}/> 
      </Switch>



      
    </div>
  );
}

export default App;
