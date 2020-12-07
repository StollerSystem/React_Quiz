import React from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';


function QuizList(props){

  useFirestoreConnect([{collection: 'quizes'}]);

  
  const quizes = useSelector(state => state.firestore.quizes);
  if (isLoaded(quizes)) {
    return (
      <React.Fragment>
        <hr/>
        {tickets.map((quiz) => {
         return <Quiz
          whenQuizClicked = { props.onQuizSelection}
          

         />         
        })}
      </React.Fragment>
    );
  }
}

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;