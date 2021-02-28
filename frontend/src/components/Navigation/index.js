import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import PostButton from './PostButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import DemoLogin from '../DemoLogin';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const categories = useSelector(state => state.category);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <PostButton user={sessionUser} />
        <ProfileButton user={sessionUser} />
      </>
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
            {categories.map((category) => {
              return <Link key={category.id} to="/">{category.name}</Link>;
            })}
            
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