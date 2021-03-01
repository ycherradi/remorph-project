import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { getFollow, createFollow } from '../../store/follow';
import './Campaign.css';

const Campaign = ({data}) => {
  const history = useHistory()
  // const dispatch = useDispatch();
  // const userId = useSelector(state => state.session.user.id)
  // const follows = useSelector(state => state.follow);
  // console.log(follows);
  // const following = follows.filter((el) => {
  //   return userId === el.userId
  // })

  // const followed = following.filter((el) => {
  //     return follows.filter((follow) => {
  //         return follow.campaignId === el.campaignId
  //     })
  // })
  // console.log(followed);

  const onClick = () => {
        const to = `/campaign/${data?.id}`;
        history.push(to)
    };
  const campaignId = data?.id;  

  // const onFollow = () => {
  //   dispatch(createFollow(campaignId, userId))
  // }  
  // useEffect(() => {
  //     dispatch(getFollow());
  // }, [dispatch])

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
          {/* <button onClick={onFollow}>{followed !== undefined ? 'UnFollow' : 'Follow'}</button> */}
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