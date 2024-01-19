import React from 'react';
import './Navbar.css';
import Navbarlist from './Navbarlist';
import { UserContext } from '../../context/UserContext';
import { CompanyContext } from '../../context/CompanyContext';

import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png'
const Navbar = () => {
  const { isLoggedIn, userr, checkUserLoggedIn, handleLogout } = useContext(UserContext);
  const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } = useContext(CompanyContext);

  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button onClick={handleLogout} className="login-button">
              <Link to="/">Sign out</Link>
            </button>
          )}
        </div>
      );
    }else if (isLoggedInC) {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button onClick={handleLogout2} className="login-button">
              <Link to="/">Sign out</Link>
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button className="login-button">
              <Link to="/ask">Sign in</Link>
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-links">
        <h2>
          <Link to="/" style={{ textDecoration: 'none', color: 'orange' }}>
            <img src={Logo} alt="" srcset="" style={{width :'12rem'}}/>
          </Link>
        </h2>
        <ul className="navitems">
          <Navbarlist />
          {/* <li>
            <a href="http://localhost:8000" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
              Chatbot
            </a>
          </li> */}
          {/* Add search input with icon */}
          <li className="hehehe">
{/*             
            <input  type="text" placeholder="Search...." className="search-input" /> */}
            
            {/* <FontAwesomeIcon icon={faSearch} className="search-icon" /> */}
          </li>
        </ul>
      </div>
      <div className="chat-login-container">
    <button className="login-button">
        <Link to="/chatengine">Chat</Link>
    </button>
    {renderAuthButton()}
</div>
</nav>
  );
};

export default Navbar;
