
import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case c.DELETE_QUIZ:
    const newState = { ...state };
    return newState;
  default:
    return state;
  }
};

export default reducer;