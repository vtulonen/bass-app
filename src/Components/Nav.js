import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/bass-icon.svg'

function Nav (){
    
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <Link to="/" className="Nav__brand">
            <img src= {icon} className="Nav__logo" alt="menu icon"/>
          </Link>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/test">test</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/path2">Link 2</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/path3">Link 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;