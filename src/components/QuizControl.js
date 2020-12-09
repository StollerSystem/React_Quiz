import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import TakeQuiz from './TakeQuiz';
import EditQuizForm from './EditQuizForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false      
    };
  }

  handleClick = () => {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      console.log("Handle click reached");
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewQuizToList = (newQuiz) => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({ collection: 'quizzes', doc: id });
    this.setState({ selectedQuiz: null, editing: false });
  }

  handleChangingSelectedQuiz = (id) => {
    // console.log("ID:" + id);
    this.props.firestore.get({ collection: 'quizzes', doc: id }).then((quiz) => {
      const firestoreQuiz = {
        name: quiz.get('name'),
        question: quiz.get('question'),
        answers: quiz.get('answers'),
        correctAnswer: quiz.get('correctAnswer'),
        id: quiz.id
      }
      this.setState({
        selectedQuiz: firestoreQuiz
      });
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleEditingQuizInList = (id) => {
    this.setState({
      selectedQuiz: null,
      editing: false
    });
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to party.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <EditQuizForm
          quiz={this.state.selectedQuiz}
          onEditQuiz={this.handleEditingQuizInList}
          onClickingDelete={this.handleDeletingQuiz}
        />
        buttonText = "Return to Quiz List";
      } else if (this.state.selectedQuiz != null) {
        currentlyVisibleState =
          <TakeQuiz
            quiz={this.state.selectedQuiz}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Quiz List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleAddingNewQuizToList} />;
        buttonText = "Return to Quiz List";
      } else {
        currentlyVisibleState = <QuizList onQuizSelection={this.handleChangingSelectedQuiz} />;
        buttonText = "Add A Quiz";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button className='btn btn-primary' onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);