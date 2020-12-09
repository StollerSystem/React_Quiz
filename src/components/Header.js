import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div className="center-align title">
      <React.Fragment>
        <h1>Quiz Party</h1>
        <h5>An epic site to build your own quizzes!</h5>        
        <Link className='btn btn-light' Link to="/">Quizzes</Link>        
        <Link className='btn btn-success' Link to="/signin">Sign In</Link>      
      </React.Fragment>
    </div>
  );
}

export default Header;