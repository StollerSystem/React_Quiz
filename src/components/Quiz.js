import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h2>• {props.name}</h2>
        <h5>By {props.user}</h5>
      </div>
    </React.Fragment>
  )
}

Quiz.propTypes = {
  user: PropTypes.string,
  name: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
  correctAnswer: PropTypes.string,
  whenQuizClicked: PropTypes.func
}

export default Quiz;