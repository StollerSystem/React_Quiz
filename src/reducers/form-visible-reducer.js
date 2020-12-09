import * as c from './../actions/ActionTypes';

 const reducer = (state = false, action) => {
  switch(action.type) {
    case c.TOGGLE_FORM:
      console.log("Toggle red reached");
      return !state;
    default:
      return state;
  }
;}

export default reducer