
import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {formattedWaitTime} = action;
  switch (action.type) {
  case c.DELETE_QUIZ:
    const newState = { ...state };
    return newState;
  // case c.UPDATE_TIME:
  //   const updatedState = Object.assign({}, state, {
  //   });
    // return updatedState;
  default:
    return state;
  }
};