import { csrfFetch } from './csrf';

const LOAD = 'category/LOAD';

const load = list => ({
  type: LOAD,
  list: list,
});



export const getCategory = () => async dispatch => {
  const response = await csrfFetch(`/api/home`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};


const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD: {
      const allCategory = action.list.category;
      return [
        ...allCategory,
        ...state,
      ];
    }
    default:
      return state;
  }
}


export default categoryReducer;
