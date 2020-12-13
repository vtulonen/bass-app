import React from "react";
import './style.css';
import Nav from "./Components/Nav"
import LandingPage from './Components/LandingPage'
import ChannelPageContainer from "./Components/ChannelPage/ChannelPageContainer"

import FirebaseUi from './Components/FirebaseUi'
import firebase from 'firebase/app';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DailyVideoPage from "./Components/DailyVideoPage";

/*
  Applikaation pääsivu, jossa  browser router eri näkymiin
*/



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) { this.setState({ isLoggedIn: true })} 
      else { this.setState({ isLoggedIn: false })}
    })
  }


  render() {
    console.log(this.state.isLoggedIn)
    return (
      <BrowserRouter>
      <div className="App">
        
        
            <Switch>
              <Route path="/" exact>
                <FirebaseUi />
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

