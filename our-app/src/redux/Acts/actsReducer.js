import * as actionTypes from './actsTypes';

const INITIAL_STATE = {
  category: '',
  time: 0,
  score: 0,
  preActNote: '',
  postActNote: '',
  preEnergy: 0,
  postEnergy: 0,
  preHappiness: 0,
  postHappiness: 0,
  preExcitement: 0,
  postExcitement: 0,
  timeStart: 0, // result of Date.now()
  timeEnd: 0, // result of Date.now()
  name: '',
  completed: [
    {
      id: 1,
      duration: 10,
      ptsEarned: 400,
      preActRate: 3,
      preActNote: 'hello',
      postActRate: 5,
      postActNote: 'bye',
      timeStart: 0,
      timeEnd: 0,
    },
    {
      id: 2,
      duration: 10,
      ptsEarned: 400,
      preActRate: 3,
      preActNote: 'hello',
      postActRate: 5,
      postActNote: 'bye',
      timeStart: 0,
      timeEnd: 0,
    },
    {
      id: 3,
      duration: 10,
      ptsEarned: 400,
      preActRate: 3,
      preActNote: 'hello',
      postActRate: 5,
      postActNote: 'bye',
      timeStart: 0,
      timeEnd: 0,
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
      return { ...state, name: action.payload.id };

    case actionTypes.PRE_ACT_NOTE:
      return { ...state, preActNote: action.payload.id };

    case actionTypes.POST_ACT_NOTE:
      return { ...state, postActNote: action.payload.id };

    case actionTypes.PRE_ENERGY:
      return { ...state, preEnergy: action.payload.id };
    case actionTypes.POST_ENERGY:
      return { ...state, postEnergy: action.payload.id };
    case actionTypes.PRE_HAPPINESS:
      return { ...state, preHappiness: action.payload.id };
    case actionTypes.POST_HAPPINESS:
      return { ...state, postHappiness: action.payload.id };
    case actionTypes.PRE_EXCITEMENT:
      return { ...state, preExcitement: action.payload.id };
    case actionTypes.POST_EXCITEMENT:
      return { ...state, postExcitement: action.payload.id };
    case actionTypes.TIME_START:
      return { ...state, timeStart: action.payload.id };
    case actionTypes.TIME_END:
      return { ...state, timeEnd: action.payload.id };

    default:
      return state;
  }
};

export default actsReducer;
