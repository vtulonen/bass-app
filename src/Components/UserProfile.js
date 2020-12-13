import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import {auth} from "../firebase"
import { Link, Route, Redirect } from 'react-router-dom';

const UserProfile = (props) => {
  
  let user = useContext(UserContext);

  if (user === null ) return(true)
  const {displayName, email} = user;

  const handleSignOut = () => {
    auth.signOut();
    console.log('user after logout')
    
    console.log(user);
    
   
  }
  
  return (
    <div className="user">
        <h2 className="user__greeting">Welcome,</h2>
        <h2 className="user__name">{displayName}</h2>
        <h3 className="user__email">{email}</h3>
        <p className="user__prompt">Use the navigation menu to start exploring!</p>
        <button className = "signout" onClick={handleSignOut}>Sign out</button>
      
      {/* <Link to="/" className = "signOut btn" onClick = {() => {auth.signOut()}}>Sign out</Link> */}
    </div>
  ) 
};
export default UserProfile;