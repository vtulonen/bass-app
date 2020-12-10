import React from "react";
import './style.css';
import Nav from "./Components/Nav"
import LandingPage from './Components/LandingPage'
import VideosContainer from "./Components/VideoPage/VideosContainer"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import {connect} from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
            <Switch>
              <Route path="/" exact>
                
                <LandingPage />

              </Route>
              <Route path="/channels" component={
                VideosContainer
              } />
               <Route path="/daily" component={
                VideosContainer
              } />
            </Switch>
          
      </div>
      </BrowserRouter>
      
    );

  }
  
}

