import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Profile-Profile.css';
import { getCampaign } from '../../store/campaign';



const ProfileProfile = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const campaigns = useSelector(state => state.campaign);
  const campaign = Object.values(campaigns).filter((el) => { 
    return userId === el.userId });

  useEffect(() => {
    dispatch(getCampaign());
    
  }, [dispatch]);
  
  
  return (
    <>
      <div className='profileProfile-div'>
        <div>
          <div className='profile-image1'>Profile Image</div>
          <form action="">
            <input type="file" id="myFile" name="filename" />
          </form>
        </div>
        <div>
          <div>
            <div className='profile-image2'></div>
            <div className='profile-aboutMe'>About Me</div>
          </div>
          <div><span className='campaign-num'>{`${campaign.length}`}</span>{` Campaigns`}</div>
          <div><span className='campaign-num'>0</span> Contributions</div>
        </div>
      </div>
    </>
  )
}







export default ProfileProfile;