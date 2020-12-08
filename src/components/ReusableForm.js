import React from 'react';
// import PropTypes from 'prop-types'
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <h3>A Question</h3>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control name="name" size="lg" type="text" placeholder="Quiz name" required/>
          <br />          
          <Form.Control name="question1" size="md" type="text" placeholder="Enter a question" required />
          <br />          
          <Form.Control name="answer1" size="sm" type="text" placeholder="Enter answer 1 here" required  />            
          <Form.Check type="radio" aria-label="radio 1" name="correctAnswer1" value="1" defaultChecked="checked"/>                    
          <br />          
          <Form.Control name="answer2" size="sm" type="text" placeholder="Enter answer 2 here" required />
          <Form.Check type="radio" aria-label="radio 1" name="correctAnswer1" value="2"  />
          <br />            
          <Form.Control name="answer3" size="sm" type="text" placeholder="Enter answer 3 here" isrequired />
          <Form.Check type="radio" aria-label="radio 1" name="correctAnswer1" value="3" />            
        </Form.Group>
        <hr></hr>
        <Button type='submit'>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  )
}

export default ReusableForm;