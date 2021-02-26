import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as campaignActions from "../../store/campaign";
import "./PostCampaign.css";
import { getCategory } from '../../store/category';
import { getLocation } from '../../store/location';

function PostCampaign() {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useSelector(state => state.location);
  const categories = useSelector(state => state.category);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media_url, setMedia_url] = useState("");
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [goal_amount, setGoal_amount] = useState("");
  const [amount_generated, setAmount_generated] = useState("");
  const [duration, setDuration] = useState("");
  const user = useSelector(state => state.session.user);
  const Category = categories?.find((el) => { 
    if (category !== '') return el.name === category
    else return el.name === categories[0].name});
  const Location = locations?.find((el) => { 
    if (location !== '') return el.country === location
    else return el.country === locations[0].country});
  

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getLocation());
  }, [dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    console.log(category, location)
    return dispatch(campaignActions.createCampaign({
        title, 
        description, 
        media_url, 
        categoryId: Category?.id, 
        locationId: Location?.id, 
        goal_amount, 
        amount_generated, 
        duration,
        userId: user.id }))
  }


  return (
    <form className="campaign-form" onSubmit={handleSubmit}>
      <div className="campaign-message">Start New Campaign!</div>
      <div className='campaign-form_div'>
        <div className="campaign-form_inputDiv">
          <label>
            Campaign Title
            <input
              className="campaign-form_input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Description
            <textarea
              className="campaign-form_input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Media Link
            <input
              className="campaign-form_input"
              type="text"
              value={media_url}
              onChange={(e) => setMedia_url(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Category
            <select
              className="campaign-form_input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categories.map((category) => {
                  return <option key={category.id}>{category.name}</option>
                })}
            </select>  
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Location
            <select
              className="campaign-form_input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
                {locations.map((location) => {
                  return <option key={location.id}>{location.country}</option>
                })}
            </select>
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Goal Amount
            <input
              className="campaign-form_input"
              type="text"
              value={goal_amount}
              onChange={(e) => setGoal_amount(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Amount Raised
            <input
              className="campaign-form_input"
              type="text"
              value={amount_generated}
              onChange={(e) => setAmount_generated(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="campaign-form_inputDiv">
          <label>
            Estimated Launch Date
            <input
              className="campaign-form_input"
              type="text"
              placeholder='  ex: Oct 2021'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </label>
        </div>
      </div>
      <button className="campaign-btn" type="submit">Post</button>
    </form>
  );
}

export default PostCampaign;