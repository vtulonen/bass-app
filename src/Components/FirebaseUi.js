import React, { Component } from 'react'
import  startFirebaseUI  from '../firebase'
import {auth} from "../firebase"
export class Ui extends Component {

  componentDidMount() {
    startFirebaseUI ('#firebaseui')
  }


  handleSignOut = () => {
    auth.signOut();
    

  }

  render() {
    return (
      <div>
         <div id="firebaseui"></div>
         {/* <button className = "signout" onClick={this.handleSignOut}>Sign out</button> */}
      </div>
    )
  }
}

export default Ui
