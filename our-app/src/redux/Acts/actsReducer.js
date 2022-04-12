import * as actionTypes from './actsTypes';

const INITIAL_STATE = {
  category: '',
  time: 0,
  score: 0,
  preActRate: 0,
  preActNote: 'pre',
  postActRate: 5,
  postActNote: 'post',
  name: 'john',
  completed: [
    {
      id: 1,
      duration: 10,
      ptsEarned: 400,
      preActRate: 3,
      preActNote: 'hello',
      postActRate: 5,
      postActNote: 'bye',
    },
    {
      id: 2,
      duration: 10,
      ptsEarned: 400,
      preActRate: 3,
      preActNote: 'hello',
      postActRate: 5,
      postActNote: 'bye',
    },
    {
      id: 3,
      duration: 10,
      ptsEarned: 400,
      preActRate: 3,
      preActNote: 'hello',
      postActRate: 5,
      postActNote: 'bye',
    },
  ], // {id, duration, ptsEarned, preActRate, preActNote, postActRate, postActNote}
  
};

const actsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY:
      return { ...state, category: action.payload.id };
    case actionTypes.TIME:
      return { ...state, time: action.payload.id };
    case actionTypes.SCORE:
      return { ...state, score: action.payload.id };
    case actionTypes.COMPLETED:
      return { ...state, completed: action.payload.id };
    case actionTypes.NAME:
      return { ...state, score: action.payload.id };
    case actionTypes.PRE_ACT_RATE:
      return { ...state, score: action.payload.id };
    case actionTypes.PRE_ACT_NOTE:
      return { ...state, score: action.payload.id };
    case actionTypes.POST_ACT_RATE:
      return { ...state, score: action.payload.id };
    case actionTypes.POST_ACT_NOTE:
      return { ...state, score: action.payload.id };
    default:
      return state;
  }
};

export default actsReducer;
