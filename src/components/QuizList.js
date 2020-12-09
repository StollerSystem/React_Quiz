import PropTypes from 'prop-types';
import Quiz from './Quiz';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import React, { useState } from 'react';
import firebase from "firebase/app";


function QuizList(props) {

  useFirestoreConnect([{ collection: 'quizzes' }]);
  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  const [myQuizzes, setHidden] = useState(true);
  const userEmail = firebase.auth().currentUser.email;  

  if (isLoaded(quizzes)) {
    if (myQuizzes) {
      return (
        <React.Fragment>
          <h1>MY QUIZZES</h1>         
          <button className='btn btn-light' onClick={() => setHidden(!myQuizzes)}>Toggle My Quizzes</button>
          <hr />
          {quizzes.map((quiz) => {
            if (quiz.user === userEmail) {
              return <Quiz
                whenQuizClicked={props.onQuizSelection}
                name={quiz.name}
                question={quiz.question}
                id={quiz.id}
                key={quiz.id}
                user={quiz.user}
              />
            } else {
              return null;
            }
          })}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h1>ALL QUIZZES</h1>
          <button className='btn btn-light' onClick={() => setHidden(!myQuizzes)}>Toggle My Quizzes</button>
          <hr />
          {quizzes.map((quiz) => {
            return <Quiz
              whenQuizClicked={props.onQuizSelection}
              name={quiz.name}
              question={quiz.question}
              id={quiz.id}
              key={quiz.id}
              user={quiz.user}
            />
          })}
        </React.Fragment>
      );
    }
  } else {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
}

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;