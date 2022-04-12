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

export const enterPreNote = (note) => {
  return {
    type: actionTypes.PRE_ACT_NOTE,
    payload: {
      id: note,
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
export const enterPreEnergy = (rate) => {
  return {
    type: actionTypes.PRE_ENERGY,
    payload: {
      id: rate,
    },
  };
};
export const enterPostEnergy = (rate) => {
  return {
    type: actionTypes.POST_ENERGY,
    payload: {
      id: rate,
    },
  };
};
export const enterPreHappiness = (rate) => {
  return {
    type: actionTypes.PRE_HAPPINESS,
    payload: {
      id: rate,
    },
  };
};
export const enterPostHappiness = (rate) => {
  return {
    type: actionTypes.POST_HAPPINESS,
    payload: {
      id: rate,
    },
  };
};
export const enterPreExcitement = (rate) => {
  return {
    type: actionTypes.PRE_EXCITEMENT,
    payload: {
      id: rate,
    },
  };
};
export const enterPostExcitement = (rate) => {
  return {
    type: actionTypes.POST_EXCITEMENT,
    payload: {
      id: rate,
    },
  };
};
