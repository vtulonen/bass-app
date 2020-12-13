import React from "react"
import './style.css'
import Nav from "./Components/Nav"
import LandingPage from './Components/LandingPage'
import ChannelPageContainer from "./Components/ChannelPage/ChannelPageContainer"

import Firebaseui from './Components/FirebaseUi'
import firebase from 'firebase/app'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import DailyVideoPage from "./Components/DailyVideoPage"
import UserProfile from './Components/UserProfile'
import UserProvider from "./Providers/UserProvider"
import { UserContext } from "./Providers/UserProvider";

/*
  Applikaation pääsivu, jossa  browserRouter eri näkymiin
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
    console.log(this.state);
  }


  render() {
    
    return (
      <UserProvider>
        <BrowserRouter>
        <div className="App">
        
          
          
              <Switch>
                <Route path="/" exact>
                  {this.state.isLoggedIn === true && <Nav />}
                  
                  {this.state.isLoggedIn === false &&<Firebaseui />}
                  <UserProfile />
                  <LandingPage />
                </Route>

                <Route path="/channels">
                  <Nav />
                  <ChannelPageContainer />
                </Route>

                <Route path="/daily"> 
                <Nav />
                <DailyVideoPage />
                </Route>

                <Route path="/profile" component={ UserProfile } />
              </Switch>
            
        </div>
        </BrowserRouter>
      </UserProvider>
      
    );

  }
  
}

