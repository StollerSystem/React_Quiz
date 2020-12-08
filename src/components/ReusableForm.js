import React from 'react';
// import PropTypes from 'prop-types'
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ReusableForm(props) {

  let nameDefault = null;
  let questionDefault = null;
  let answer1Default = null;
  let answer2Default = null;
  let answer3Default = null;

  if (props.questionDefault) {
    nameDefault = props.nameDefault;
  }
  if (props.questionDefault) {
    questionDefault = props.questionDefault;
  }
  if (props.questionDefault) {
    answer1Default = props.answer1Default;
  }
  if (props.questionDefault) {
    answer2Default = props.answer2Default;
  }
  if (props.questionDefault) {
    answer3Default = props.answer3Default;
  }

  return (
    <React.Fragment>
      <h3>A Question</h3>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control name="name" size="lg" type="text" placeholder="Quiz name" required required defaultValue={nameDefault}/>
          <br />          
          <Form.Control name="question1" size="md" type="text" placeholder="Enter a question" required defaultValue={questionDefault} />
          <br />          
          <Form.Control name="answer1" size="sm" type="text" placeholder="Enter answer 1 here" required  required defaultValue={answer1Default}/>            
          <Form.Check type="radio" aria-label="radio 1" name="correctAnswer1" value="1" defaultChecked="checked"/>                    
          <br />          
          <Form.Control name="answer2" size="sm" type="text" placeholder="Enter answer 2 here" required required defaultValue={answer2Default}/>
          <Form.Check type="radio" aria-label="radio 1" name="correctAnswer1" value="2"  />
          <br />            
          <Form.Control name="answer3" size="sm" type="text" placeholder="Enter answer 3 here" isrequired required defaultValue={answer3Default}/>
          <Form.Check type="radio" aria-label="radio 1" name="correctAnswer1" value="3" />            
        </Form.Group>
        <hr></hr>
        <Button type='submit'>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  )
}

export default ReusableForm;