import { csrfFetch } from './csrf';

const LOAD = 'campaign/LOAD';
const LOAD_TYPES = 'campaign/LOAD_TYPES';
const ADD_ONE = 'campaign/ADD_ONE';

const load = list => ({
  type: LOAD,
  list: list,
});

// const loadTypes = types => ({
//   type: LOAD_TYPES,
//   types,
// });

const addOneCampaign = campaign => ({
  type: ADD_ONE,
  campaign,
});

export const createCampaign = data => async dispatch => {
  const response = await csrfFetch(`/api/campaign`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const campaign = await response.json();
    dispatch(addOneCampaign(campaign));
    return campaign;
  }
};

export const updateCampaign = data => async dispatch => {
  const response = await csrfFetch(`/api/campaign/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    const campaign = await response.json();
    dispatch(addOneCampaign(campaign));
    return campaign;
  }
};

export const getOneCampaign = id => async dispatch => {
  const response = await csrfFetch(`/api/campaign/${id}`);

  if (response.ok) {
    const campaign = await response.json();
    dispatch(addOneCampaign(campaign));
  }
};

export const getCampaign = () => async dispatch => {
  const response = await csrfFetch(`/api/home`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

// export const getPokemonTypes = () => async dispatch => {
//   const response = await fetch(`/api/pokemon/types`);

//   if (response.ok) {
//     const types = await response.json();
//     dispatch(loadTypes(types));
//   }
// };

const initialState = {};

const sortList = (list) => {
  return list.campaign.sort((campaignA, campaignB) => {
    return campaignB.no - campaignA.no;
  }).map((campaign) => campaign.id);
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allCampaign = {};
      action.list.campaign.forEach(campaign => 
        allCampaign[campaign.id] = campaign
      );
      return {
        ...allCampaign,
        ...state,
      };
    }
    case LOAD_TYPES: {
      return {
        ...state,
        types: action.types,
      };
    }
    case ADD_ONE: {
      if (!state[action.campaign.id]) {
        const newState = {
          ...state,
          [action.campaign.id]: action.campaign
        };
        const campaignList = newState.list.map(id => newState[id]);
        campaignList.push(action.campaign);
        newState.list = sortList(campaignList);
        return newState;
      }
      return {
        ...state,
        [action.campaign.id]: {
          ...state[action.campaign.id],
          ...action.campaign,
        }
      };
    }
    // case REMOVE_CAMPAIGN: {
    //   return {
    //     ...state,
    //     [action.campaignId]: {
    //       ...state[action.campaignId],
    //       items: state[action.campaignId].filter(
    //         (item) => item.id !== action.itemId
    //       ),
    //     },
    //   };
    // }
    default:
      return state;
  }
}


export default campaignReducer;
