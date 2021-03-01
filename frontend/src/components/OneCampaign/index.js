import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ReactPlayer from "react-player";
import './OneCampaign.css';
import { getCampaign, deleteCampaign } from '../../store/campaign';
import { getFollow, createFollow, deleteFollow } from '../../store/follow';

const OneCampaign = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const campaign = useSelector(state => state.campaign[id]);
  const campaignId = campaign?.id;
  const user = useSelector(state => state.session.user);
  const userId =user?.id;
  const follows = useSelector(state => state.follow);
  const following = follows.filter((el) => {
    return user.id === el.userId
  })

  const followed = following.find((el) => {
    return campaignId === el.campaignId
  })

  useEffect(() => {
    dispatch(getCampaign());
    dispatch(getFollow());
    
  }, [dispatch]);

  const onFollow = () => {
    dispatch(createFollow(campaignId, userId))
  }  

  const offFollow = () => {
    const follow = following?.find((el) => el.userId === userId && el.campaignId === campaignId)
    dispatch(deleteFollow(follow?.id));
  }

const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCampaign(campaign));
    return history.push('/');
  }



  return (
    <div>
      <div className='oneCampaign-container'>
        <div className='player-wrapper-onecampaign'>
          <ReactPlayer
          className="react-player-onecampaign"
          url={campaign?.media_url}
          playing={false}
          width='100%'
          height='100%'
          controls={false}
        />
        </div>
        <div className='campaign-info'>
          <div className='title-onecampaign campaign-div_inner'>{campaign?.title}</div>
          <div className='text-spacer-onecampaign'></div>
          <div className='description-onecampaign campaign-div_inner'>{campaign?.description}</div>
          <div className='text-spacer-onecampaign'></div>
          <div className='category-onecampaign campaign-div_inner'>{campaign?.Category.name}</div>
          <div className='text-spacer-onecampaign'></div>
          <div className='raised-onecampaign campaign-div_inner'>Amount Raised ${campaign?.amount_generated}</div>
          <div className='text-spacer-onecampaign'></div>
          <div className='follow-btn-onecampaign'>
            {followed !== undefined ? <button onClick={offFollow}>Unfollow</button> : <button onClick={onFollow}>Follow</button>}
            <button>Contribute</button>
            {campaign?.userId === user?.id ? <button onClick={handleDelete}>Delete</button> : ''}
        </div>
        </div>
      </div>
    </div>
  );

};

export default OneCampaign;