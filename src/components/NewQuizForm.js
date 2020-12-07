import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/form';

function NewQuizForm(props) {
  return (
    <React.Fragment>
    <div className='align-items-center d-flex'>
      <h1>NEW QUIZ FORM!</h1>
      <div className='form-group'>
        <label htmlFor='question1'>Your First Question</label>
        <input type='text' className='form-control' id='question1input'></input>
      </div>
      <br></br>
      <div className='form-group'>
        <label htmlFor='question2'>Your First Answer</label>
        <input type='text' className='form-control' id='question2input'></input>
      </div>
      <br></br>
      <div className='form-group'>
        <label htmlFor='question3'>Your Second Answer</label>
        <input type='text' className='form-control' id='question3input'></input>
      </div>
      <div className='form-group'>
        <label htmlFor='question3'>Your Third Answer</label>
        <input type='text' className='form-control' id='question3input'></input>
      </div>
      <br></br>
      </div>
    </React.Fragment>
  )
}

export default NewQuizForm;