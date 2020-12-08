import React from "react";
import PropTypes from "prop-types";
import Form  from 'react-bootstrap/Form';

function TakeQuiz(props) {
  const { quiz, onClickingDelete } = props;


  function quizSubmissionHandler(event) {
    event.preventDefault();
    console.log(event.target.answerOption.value)
    console.log(quiz.correctAnswer)
    if (event.target.answerOption.value == quiz.correctAnswer) {
      alert("Yay ur right!");
    } else {
      alert("YOU'RE WRONG!");
    }
  }

  return (
    <React.Fragment>
      <h1>{quiz.name}</h1>
      <h3>Question 1: {quiz.question}</h3>      
      <Form onSubmit={quizSubmissionHandler}>      
        <Form.Group>
          <p>{quiz.answers[0]}</p>
          <Form.Check type="radio" aria-label="radio 1" name="answerOption" value="1"/>
          <p>{quiz.answers[1]}</p>
          <Form.Check type="radio" aria-label="radio 1" name="answerOption" value="2"/>
          <p>{quiz.answers[2]}</p>
          <Form.Check type="radio" aria-label="radio 1" name="answerOption" value="3"/>
        </Form.Group>
        <button className="btn btn-light btn-outline" type="submit">Submit answer!</button>
      </Form>
      
      <button className="btn btn-light btn-outline" onClick={ props.onClickingEdit }>Edit This Quiz</button>
      {/* <button onClick={ props.onClickingDelete(quiz.id) }> Remove Quiz</button> */}
      
      
    </React.Fragment>
  );
}

TakeQuiz.propTypes = {
  quiz: PropTypes.object,
  // onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TakeQuiz;