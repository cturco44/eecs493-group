import * as actionTypes from './actsTypes';

const INITIAL_STATE = {
  category: 'mental',
  time: 10,
  score: 0,
  completed: [],
};

const actsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY:
      return { ...state, category: action.payload.id };
    case actionTypes.TIME:
      return {};
    default:
      return state;
  }
};

export default actsReducer;
