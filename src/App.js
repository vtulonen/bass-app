import React from "react";
import './style.css';
import Nav from "./Components/Nav"
import LandingPage from './Components/LandingPage'
import ChannelPageContainer from "./Components/ChannelPage/ChannelPageContainer"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DailyVideoPage from "./Components/DailyVideoPage";

/*
  Applikaation pääsivu, jossa  browser router eri näkymiin
*/

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

              <Route path="/channels" component={ ChannelPageContainer } />

               <Route path="/daily" component={ DailyVideoPage } />
            </Switch>
          
      </div>
      </BrowserRouter>
      
    );

  }
  
}

