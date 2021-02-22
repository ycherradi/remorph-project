import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import DemoLogin from '../DemoLogin';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <DemoLogin />
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div>
          <NavLink className="navbar-left_navlink" exact to="/">ReMORPH</NavLink>
        </div>
        <div className="dropdown">Explore ⧨
          <div className="dropdown-content">
            <Link to="#">Link 1</Link>
          </div>
        </div>
        <div className="search-div">
          <input type="text" name="search" className="search" placeholder="&#61442;"></input>
        </div>
      </div>
      <div className="navbar-right">
        <div></div>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;