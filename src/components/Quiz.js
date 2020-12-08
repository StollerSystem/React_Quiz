import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h3>{props.name}</h3>
      </div>
    </React.Fragment>
  )
}

Quiz.propTypes = {
  name: PropTypes.string,
  // question: PropTypes.string,
  // answers: PropTypes.array,
  // correctAnswer: PropTypes.string,
  whenQuizClicked: PropTypes.func
}

export default Quiz;