import * as actionTypes from './actsTypes';

export const selectCategory = (cat) => {
  return {
    type: actionTypes.CATEGORY,
    payload: {
      id: cat,
    },
  };
};

export const selectTime = (time) => {
  return {
    type: actionTypes.TIME,
    payload: {
      id: time,
    },
  };
};

export const changeScore = (score) => {
  return {
    type: actionTypes.SCORE,
    payload: {
      id: score,
    },
  };
};

export const changeCompleted = (completed) => {
  return {
    type: actionTypes.COMPLETED,
    payload: {
      id: completed,
    },
  };
};

export const enterName = (name) => {
  return {
    type: actionTypes.NAME,
    payload: {
      id: name,
    },
  };
};

export const enterPreRate = (rate) => {
  return {
    type: actionTypes.PRE_ACT_RATE,
    payload: {
      id: rate,
    },
  };
};
export const enterPreNote = (note) => {
  return {
    type: actionTypes.PRE_ACT_NOTE,
    payload: {
      id: note,
    },
  };
};
export const enterPostRate = (rate) => {
  return {
    type: actionTypes.POST_ACT_RATE,
    payload: {
      id: rate,
    },
  };
};
export const enterPostNote = (note) => {
  return {
    type: actionTypes.POST_ACT_NOTE,
    payload: {
      id: note,
    },
  };
};
