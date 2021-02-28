import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Profile.css'





const Profile = () => {

  const user = useSelector(state => state.session.user);

  return (
    <div>
      <div className='spacer-name_above'></div>
      <div className='name'>{`${user.firstname} ${user.lastname}`}</div>
      <div className='spacer-name_below'></div>
      <div className='profile-navbar'>
        <div className='profile-navbar_links'>
          <div className='profile-navbar_link'>
            <NavLink to='/profile'>Profile</NavLink>
          </div>
          <div className='profile-navbar_link'>
            <NavLink to='/profile/campaign'>Campaigns</NavLink>
          </div>
          <div className='profile-navbar_link'>
            <NavLink to='/profile/contribution'>Contributions</NavLink>
          </div>
        </div>
        <div></div>
      </div>
      <div className='profile-navbar_below'>
      </div>
    </div>
  )
}




export default Profile;