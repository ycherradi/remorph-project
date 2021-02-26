import { csrfFetch } from './csrf';

const LOAD = 'location/LOAD';

const load = list => ({
  type: LOAD,
  list: list,
});


export const getLocation = () => async dispatch => {
  const response = await csrfFetch(`/api/home`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};


const locationReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD: {
      const allLocation = action.list.location;
      return [
        ...allLocation,
      ];
    }
    default:
      return state;
  }
}


export default locationReducer;
