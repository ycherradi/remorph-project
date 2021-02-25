import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flickity from 'react-flickity-component';
import Campaign from '../Campaign';
import './Home.css';

import { getCampaign } from '../../store/campaign';

const CampaignBrowser = () => {
  const flickityOptions = {
    freeScroll: true,
    wrapAround: true,
  }
  const dispatch = useDispatch();
  const campaigns = useSelector(state => state.campaign);
  useEffect(() => {
    dispatch(getCampaign());
    
  }, [dispatch]);


  return (
    <div>
      <Flickity
        className='gallery' // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate={true} // default false
        static={false}// default false
      >
        <div className='gallery-cell'></div>
        <div className='gallery-cell'></div>
        <div className='gallery-cell'></div>
        <div className='gallery-cell'></div>
        <div className='gallery-cell'></div>
      </Flickity>
      <div className='spacer1'></div>
      <div className='campaigns-div'>
        <div className='campaign'>
          {Object.values(campaigns).map((campaign) => {
            return <Campaign className='campaign-comp' key={campaign.id} data={campaign}/>
          })}
        </div>
        <div className="spacer2">
        </div>
        <div className='campaign'>
          {Object.values(campaigns).map((campaign) => {
            return <Campaign className='campaign-comp' key={campaign.id} data={campaign}/>
          })}
        </div>
        <div className="spacer2"></div>
        <div className='campaign'>
          {Object.values(campaigns).map((campaign) => {
            return <Campaign className='campaign-comp' key={campaign.id} data={campaign}/>
          })}
        </div>
        <div className="spacer2"></div>
        <div className='campaign'>
          {Object.values(campaigns).map((campaign) => {
            return <Campaign className='campaign-comp' key={campaign.id} data={campaign}/>
          })}
        </div>

      </div>
    </div>
  );
};

export default CampaignBrowser;
