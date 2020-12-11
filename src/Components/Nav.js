import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/bass-icon.svg'

function Nav (){
    
    return (
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__right">
            <ul className="nav__item-wrapper">
              <li className="nav__item">
                <Link className="nav__link" to="/channels">Bass Channels</Link>
              </li>
              <li className="nav__item-mod">
              <Link to="/" className="nav__brand">
            <img src= {icon} className="nav__logo" alt="menu icon"/>
          </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/daily">Video of the Day</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;