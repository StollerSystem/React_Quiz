import React from 'react';
import PropTypes from 'prop-types';


function Quiz(props) {  
  if (props.myQuizzes){
  return (
    <React.Fragment>
      
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h2>• {props.name}</h2>
        <h5>By {props.user}</h5>
        <h5> Taken: {props.timesTaken} <span className="passed">Passed: {props.timesPassed}</span> <span className='failure'>Failed: {Number(props.timesTaken-props.timesPassed)}</span></h5>
      </div>
    </React.Fragment>
  )
} else { return(
  <div onClick = {() => props.whenQuizClicked(props.id)}>
  <h2>• {props.name}</h2>
  <h5>By {props.user}</h5>
</div>)
}
}

Quiz.propTypes = {
  user: PropTypes.string,
  name: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
  correctAnswer: PropTypes.string,
  whenQuizClicked: PropTypes.func,
  timesTaken: PropTypes.number,
  timesPassed: PropTypes.number,
  myQuizzes: PropTypes.bool, 
}

export default Quiz;