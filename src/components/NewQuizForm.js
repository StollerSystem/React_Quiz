import React from 'react';
import PropTypes from 'prop-types';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewQuizForm(props) {
  return (
    <div className="container">
      <h2>CREATE A QUIZ!</h2>      
      <React.Fragment>
        <Form>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Enter a question" />
            <br />          
            <Form.Control size="sm" type="text" placeholder="Enter answer 1 here" />            
            <Form.Check type="radio" aria-label="radio 1" name="correctAnswer" value="1"/>                    
            <br />          
            <Form.Control size="sm" type="text" placeholder="Enter answer 2 here" />
            <Form.Check type="radio" aria-label="radio 1" name="correctAnswer" value="2"/>
            <br />            
            <Form.Control size="sm" type="text" placeholder="Enter answer 3 here" />
            <Form.Check type="radio" aria-label="radio 1" name="correctAnswer" value="3"/>            
          </Form.Group>
          <br></br>        
        </Form>
      </React.Fragment>
    </div>
  )
}

export default NewQuizForm;