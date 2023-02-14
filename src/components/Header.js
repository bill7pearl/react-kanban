import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets';
import Missions from './missions';
import MyProfile from './myProfile';
import Img from '../Logo.png';

const Header = () => (
  <div className="header-top">
    <div className='logo'>
      <img className="img" src={Img} alt="logo" />
      <h1>Space Travelers' Hub</h1>
    </div>
    <div>
    <nav className="nav-link">
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/missions">Missions</NavLink></li>
      <li className='li'><NavLink to="/MyProfile">My Profile</NavLink></li>
    </nav>
    <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </div>
 
  </div>
);

export default Header;