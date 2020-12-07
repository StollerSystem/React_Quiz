import React from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';


function QuizList(props){

  useFirestoreConnect([{collection: 'quizzes'}]);

  
  const quizzes = useSelector(state => state.firestore.quizzes);
  
  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <hr/>
        {quizzes.map((quiz) => {
         return <Quiz
          whenQuizClicked = { props.onQuizSelection}


         />         
        })}
      </React.Fragment>
    );
  } else {
    return(
      <React.Fragment>
        <h1>LOADING!</h1>
      </React.Fragment>
    )
  }
}

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;