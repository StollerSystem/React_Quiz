import formVisibleReducer from './form-visible-reducer';
import quizListReducer from './quiz-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
// import rootReducer from './index';


const rootReducer = combineReducers({
  firestore: firestoreReducer
});


export default rootReducer;