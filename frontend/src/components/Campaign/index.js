// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import ReactPlayer from "react-player";
// import { getFollow, createFollow, deleteFollow } from '../../store/follow'; 
// import { getCampaign } from '../../store/campaign';
import './Campaign.css';

const Campaign = ({data}) => {
  // const dispatch = useDispatch();
  const history = useHistory();
  // const [ campaignId, SetCampaignId ] = useState(0)
  // // const campaign = useSelector(state => state.campaign);
  // const user = useSelector(state => state.session.user);
  // const userId =user?.id;
  // const follows = useSelector(state => state.follow);
  // const following = follows?.filter((el) => {
  //   return user?.id === el.userId
  // })

  // const followed = following?.find((el) => {
  //   return campaignId === el.campaignId
  // })

  // useEffect(() => {
  //   dispatch(getCampaign());
  //   dispatch(getFollow());
    
  // }, [dispatch]);

  const onClick = () => {
        const to = `/campaign/${data?.id}`;
        history.push(to)
    };
  // const campaignId = data?.id;  

  // const onFollow = () => {
  //   SetCampaignId(data?.id)
  //   dispatch(createFollow(campaignId, userId))
  // }  

  // const offFollow = () => {
  //   SetCampaignId(data?.id)
  //   const follow = following?.find((el) => el.userId === userId && el.campaignId === campaignId)
  //   dispatch(deleteFollow(follow?.id));
  // }

  return (
    <div>
      <div className='campaign-div'>
        <div className='player-wrapper' onClick={onClick}>
          <ReactPlayer
          className="react-player"
          onClick={onClick}
          url={data?.media_url}
          playing={false}
          width='100%'
          height='100%'
          controls={false}
        />
        </div>
        <div className='text-spacer'></div>
        <div className='follow-btn'>
          {/* {followed !== undefined ? <button onClick={offFollow}>Unfollow</button> : <button onClick={onFollow}>Follow</button>} */}
        </div>
        <div className='title campaign-div_inner' onClick={onClick}>{data?.title}</div>
        <div className='text-spacer' onClick={onClick}></div>
        <div className='description campaign-div_inner' onClick={onClick}>{data?.description}</div>
        <div className='text-spacer' onClick={onClick}></div>
        <div className='category campaign-div_inner' onClick={onClick}>{data?.Category.name}</div>
        <div className='text-spacer' onClick={onClick}></div>
        <div className='raised campaign-div_inner' onClick={onClick}>Amount Raised ${data?.amount_generated}</div>
      </div>
      <div className='spacer2'></div>
    </div>
  )
}





export default Campaign;