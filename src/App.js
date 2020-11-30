import React from "react";
import './style.css';
import Nav from "./Components/Nav"
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
                <div>
                  <h1>Main page</h1>
                </div>
              </Route>
              <Route path="/path1" component={
                VideosContainer
              } />
               <Route path="/path2" component={
                VideosContainer
              } />
              
            </Switch>
          
      </div>
      </BrowserRouter>
      
    );

  }
  
}

