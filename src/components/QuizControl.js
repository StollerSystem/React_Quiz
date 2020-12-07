import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import TakeQuiz from './TakeQuiz';
//import EditQuizForm from './EditQuizForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';

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

  handleChangingSelectedQuiz= (id) => {
    this.props.firestore.get({collection: 'quizes', doc: id}).then((quiz) => {
      const fireStoreQuiz = {
        quizName: quiz.quizName.get('quizName'),
        questions: quiz.get('questions'),
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
  this.props.firestore.delete({collection: 'quizes', doc: id});
  this.setState({selectedQuiz: null});
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.editing ) {      
    currentlyVisibleState = <EditQuizForm quiz = {this.state.selectedQuiz} onEditQuiz = {this.handleEditingQuizInList} />
    buttonText = "Return to Quiz List";
  } else if (this.state.selectedQuiz != null) {
    currentlyVisibleState = 
    <TakeQuiz 
      quiz = {this.state.selectedQuiz} 
      onClickingDelete = {this.handleDeletingQuiz} 
      onClickingEdit = {this.handleEditClick} />
    buttonText = "Return to Quiz List";
  } else if (this.props.formVisibleOnPage) {
    currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleAddingNewQuizToList}  />;
    buttonText = "Return to Quiz List";
  } else {
    currentlyVisibleState = <QuizList onQuizSelection={this.handleChangingSelectedQuiz} />;
    buttonText = "Add A Quiz";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);