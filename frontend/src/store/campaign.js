import { csrfFetch } from './csrf';

const LOAD = 'campaign/LOAD';


const load = list => ({
  type: LOAD,
  list: list,
});


export const createCampaign = data => async dispatch => {
  return await csrfFetch(`/api/home`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

// export const updateCampaign = data => async dispatch => {
//   const response = await csrfFetch(`/api/campaign/${data.id}`, {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
  
//   if (response.ok) {
//     const campaign = await response.json();
//     dispatch(addOneCampaign(campaign));
//     return campaign;
//   }
// };

export const getCampaign = () => async dispatch => {
  const response = await csrfFetch(`/api/home`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const deleteCampaign = data => async dispatch => {
  await csrfFetch(`/api/campaign/${data.id}`, {
    method: 'delete',
  });
  dispatch(getCampaign());
};


const initialState = {};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allCampaign = {};
      action.list.campaign.forEach(campaign => 
        allCampaign[campaign.id] = campaign
      );
      return {
        ...allCampaign,
      };
    }
    default:
      return state;
  }
}


export default campaignReducer;
