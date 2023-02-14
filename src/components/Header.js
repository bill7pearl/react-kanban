import React from 'react';
import Img from '../Logo.png';

const Header = () => (
  <div className="header-top">
    <div className='logo'>
      <img className="img" src={Img} alt="logo" />
      <h1>Space Travelers' Hub</h1>
    </div>
    <div>
    <nav className="nav-link">
      <li>Rockets</li>
      <li >Missions</li>
      <li className='li'>My Profile</li>
    </nav>
   
    </div>
 
  </div>
);

export default Header;