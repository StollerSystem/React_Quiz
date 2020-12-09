import React from 'react';
import firebase from "firebase/app";

function Signin(props) {

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      alert("successfully signed up!")
    }).catch(function (error) {
      alert(error.message);
    })
  }

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };

  function doSignIn(event) {
    event.preventDefault();
    props.handleSetUser(event.target.signinEmail.value)
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
      alert("Successfully signed in!");
      handleReset();
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    props.handleSetUser(null)
    firebase.auth().signOut().then(function () {
      alert("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    })
  }

  if (props.user) {
    return (
      <React.Fragment>
        <h2>Signed in as {props.user}</h2>
        <button className='btn btn-danger' onClick={doSignOut}>Sign out</button>
      </React.Fragment>
    )
  } else {    
      return (
      <React.Fragment>
        <h2>Sign up</h2>
        <form onSubmit={doSignUp}>
          <input
            type='text'
            name='email'
            placeholder='email' />
          <br></br>
          <input
            type='password'
            name='password'
            placeholder='password' />
          <button className='btn btn-success' type='submit'>Sign up</button>
        </form>
        <h2>Sign in</h2>
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
          <br></br>
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' />
          <button type='submit' className='btn btn-success'>Sign in</button>
        </form>      
      </React.Fragment>
    )
  }
}

export default Signin