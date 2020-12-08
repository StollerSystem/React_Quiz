import React from 'react';
// import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

import {useFirestore} from 'react-redux-firebase';


function NewQuizForm(props) {
  
  const firestore= useFirestore();    

  function addQuizToFirestore(event) {    
    event.preventDefault();
    props.onNewQuizCreation();    
    return firestore.collection('quizzes').add({
        name: event.target.name.value,
        question: event.target.question1.value, 
        answers: [event.target.answer1.value, event.target.answer2.value, event.target.answer3.value], 
        correctAnswer: event.target.correctAnswer1.value})        
  }


  return (
    <div className="container">
      <h2>CREATE A QUIZ!</h2>      
      <React.Fragment>
        <ReusableForm formSubmissionHandler={addQuizToFirestore}
        buttonText="Create!"
        ></ReusableForm>        
      </React.Fragment>
    </div>
  )
}

export default NewQuizForm;