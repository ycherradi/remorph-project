import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './Profile-Profile.css';
import { getCampaign } from '../../store/campaign';
import { getFollow } from '../../store/follow';
import './Profile-Campaigns.css'
import ReactPlayer from "react-player";



const ProfileCampaign = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const campaigns = useSelector(state => state.campaign);
  const campaign = Object.values(campaigns).filter((el) => { 
    return userId === el.userId });
    const follows = useSelector(state => state.follow);
  const following = follows?.filter((el) => {
    return userId === el.userId
  })
  console.log('following', following);

  useEffect(() => {
    dispatch(getCampaign());
    dispatch(getFollow());
    
  }, [dispatch]);
  
  
  return (
    <>
      <div className='profileCampaign-div'>
        <div className='campaign-im-on'>Campaigns I'm On</div>
        {campaign.map((el) => {
          return <div className="profile-campaign" key={el.id}>
              <div className="profile-campaign_player">
                <div className='player-wrapper1'> 
                  <ReactPlayer
                    className="react-player"
                    url={el.media_url}
                    playing={false}
                    width='100%'
                    height='100%'
                    controls={false}
                  />
                </div>
              </div>
              <div>
                <NavLink className='campaign-profile_title' to={`/campaign/${el.id}`}>{el.title}</NavLink>
                <div className='campaign-profile_id'>{`Campaign ID: ${el.id}`}</div>
              </div>
          </div>
        })}
        <div className='campaign-following'>Campaigns I'm Following</div>
        {following?.map((ele) => {
          return <div className="profile-campaign" key={ele.name}>
              <div className="profile-campaign_player">
                <div className='player-wrapper1'> 
                  <ReactPlayer
                    className="react-player"
                    url={campaigns[ele.campaignId].media_url}
                    playing={false}
                    width='100%'
                    height='100%'
                    controls={false}
                  />
                </div>
              </div>
              <div>
                <NavLink className='campaign-profile_title' to={`/campaign/${ele.campaignId}`}>{campaigns[ele.campaignId].title}</NavLink>
                <div className='campaign-profile_id'>{`Campaign ID: ${ele.campaignId}`}</div>
              </div>
          </div>
        })}
      </div>
    </>
  )
}


export default ProfileCampaign;