import React from 'react'
import { useHistory } from 'react-router-dom'
import ReactPlayer from "react-player";
import './Campaign.css';

const Campaign = ({data}) => {
  const history = useHistory()
  const onClick = () => {
        const to = `/campaign/${data?.id}`;
        history.push(to)
    }

  return (
    <div>
      <div className='campaign-div' onClick={onClick}>
        <div className='player-wrapper'>
          <ReactPlayer
          className="react-player"
          url={data?.media_url}
          playing={false}
          width='100%'
          height='100%'
          controls={false}
        />
        </div>
        <div className='text-spacer'></div>
        <div className='follow-btn'>
          <button>Follow</button>
        </div>
        <div className='title campaign-div_inner'>{data?.title}</div>
        <div className='text-spacer'></div>
        <div className='description campaign-div_inner'>{data?.description}</div>
        <div className='text-spacer'></div>
        <div className='category campaign-div_inner'>{data?.Category.name}</div>
        <div className='text-spacer'></div>
        <div className='raised campaign-div_inner'>Amount Raised ${data?.amount_generated}</div>
      </div>
      <div className='spacer2'></div>
    </div>
  )
}





export default Campaign;