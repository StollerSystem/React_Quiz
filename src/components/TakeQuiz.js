import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import firebase from "firebase/app";
import {useFirestore} from "react-redux-firebase";

function TakeQuiz(props) {

  const { quiz } = props;
  const firestore = useFirestore();
  const userEmail = firebase.auth().currentUser.email;
  let button = null;
  let prompt = null;

  function updateTimesTaken() {
    let timesTaken = quiz.timesTaken += 1;    
    return firestore.update({collection: 'quizzes', doc:quiz.id},{timesTaken: timesTaken})
  }

  function updateTimesPassed() {
    let timesPassed = quiz.timesPassed += 1;    
    return firestore.update({collection: 'quizzes', doc:quiz.id},{timesPassed: timesPassed})
  }
  
  function quizSubmissionHandler(event) {
    event.preventDefault();
    updateTimesTaken();
    console.log(event.target.answerOption.value)
    console.log(quiz.correctAnswer)
    if (event.target.answerOption.value === quiz.correctAnswer) {
      alert("Yay ur right!");
      updateTimesPassed();
      return firestore.collection('answers').add({
        user: userEmail,
        name: quiz.name,
        id: quiz.id,
        correct: true
      });      
    } else {
      alert("YOU'RE WRONG!");
      return firestore.collection('answers').add({
        user: userEmail,
        name: quiz.name,
        id: quiz.id,
        correct: false
      });
    }
  }  

  if (quiz.user === userEmail) {
    button = <button className="btn btn-light btn-outline" onClick={props.onClickingEdit}>Edit This Quiz</button>
    prompt = <h2>( Your quiz )</h2>
  }

  return (
    <React.Fragment>
      <h1>{quiz.name}</h1>
      {prompt}
      {button}
      <h3>Question 1: {quiz.question}</h3>
      <Form onSubmit={quizSubmissionHandler}>
        <Form.Group>
          <p>{quiz.answers[0]}</p>
          <Form.Check type="radio" aria-label="radio 1" name="answerOption" value="1" />
          <p>{quiz.answers[1]}</p>
          <Form.Check type="radio" aria-label="radio 1" name="answerOption" value="2" />
          <p>{quiz.answers[2]}</p>
          <Form.Check type="radio" aria-label="radio 1" name="answerOption" value="3" />
        </Form.Group>
        <button className="btn btn-light btn-outline" type="submit">Submit answer!</button>
      </Form>      
    </React.Fragment>
  );
}

TakeQuiz.propTypes = {
  quiz: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default TakeQuiz