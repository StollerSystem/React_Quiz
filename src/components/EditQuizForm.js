import React from 'react';
import {useFirestore} from 'react-redux-firebase';
import ReusableForm from './ReusableForm'
import PropTypes from 'prop-types';

function EditQuizForm(props){
  const firestore = useFirestore();
  const { quiz, onClickingDelete } = props;

  function handleEditQuizSubmit(event){
    event.preventDefault();
    props.onEditQuiz() 
    const updatedQuizProperties = {
    name:event.target.name.value,
    question: event.target.question1.value,
    answers: [event.target.answer1.value,event.target.answer2.value,event.target.answer3.value],
    correctAnswer: event.target.correctAnswer1.value
  } 
  return firestore.update({collection: 'quizzes', doc:quiz.id},updatedQuizProperties)
  }

  return (
      <React.Fragment>
              <h2>UPDATE A QUIZ!</h2>      
        <ReusableForm 
        formSubmissionHandler={handleEditQuizSubmit}
        buttonText="UPDATE!"
        nameDefault={quiz.name}
        questionDefault={quiz.question}
        answer1Default={quiz.answers[0]}
        answer2Default={quiz.answers[1]}
        answer3Default={quiz.answers[2]}
        ></ReusableForm> 
            <button onClick={() => onClickingDelete (quiz.id)} className='btn btn-danger'>DELETE QUIZ</button>
            
                                        
      </React.Fragment>
  )
}

EditQuizForm.propTypes = {
  onClickingDelete: PropTypes.func
}

export default EditQuizForm;