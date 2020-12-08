import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div className="center-align title">
      <React.Fragment>
        <h1>Quiz Party</h1>
        <h3>An epic site to build your own quizzes!</h3>        
        <Link to="/">Home</Link>        
        <Link to="/signin">Sign In</Link>      
      </React.Fragment>
    </div>
  );
}

export default Header;