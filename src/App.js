import React from "react";
import './style.css';
import TestComponent from "./Components/Test"
import Nav from "./Components/Nav"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
              <Route path="/test" component={
                TestComponent
              } />
              
            </Switch>
          {/* <header className="App-header">
            <Test/>
            <Test/>
          
          </header> */}
      </div>
      </BrowserRouter>
      
    );

  }
  
}

