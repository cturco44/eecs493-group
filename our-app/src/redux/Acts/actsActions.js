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
