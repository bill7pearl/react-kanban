import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../Logo.png';

const Header = () => (
  <main className="header-top">
    <div className="logo">
      <img className="img" src={Img} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <div>
      <nav className="nav-link">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li className="li"><NavLink to="/profile">My Profile</NavLink></li>
      </nav>
    </div>
  </main>
);

export default Header;
