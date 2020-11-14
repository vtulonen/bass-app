import React from "react";
import './App.css';
import TestComponent from "./Components/Test"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <nav className="nav">
              <ul>
                <li className="nav-item">
                  <Link to="/">Main Page</Link>
                </li>
                <li className="nav-item">
                  <Link to="/test">Test</Link>
                </li>
                
              </ul>
        </nav>

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

