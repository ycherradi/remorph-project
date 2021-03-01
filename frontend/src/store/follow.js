import { csrfFetch } from './csrf';


const LOAD = 'follow/LOAD';


const load = list => ({
  type: LOAD,
  list,
});

// Create follow not working but route works

export const createFollow = (campaignId, userId) => async dispatch => {
  await csrfFetch(`/api/follow`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({campaignId, userId}),
  });
  dispatch(getFollow());
};


export const getFollow = () => async dispatch => {
  const response = await csrfFetch(`/api/follow`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

// Delete follow not working but route works

export const deleteFollow = id => async dispatch => {
  await csrfFetch(`/api/follow`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id}),
  });
  dispatch(getFollow());
};

const initialState = [];

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allFollow = action.list.follows;
      return [ ...allFollow];
    }
    default:
      return state;
  }
}


export default followReducer;