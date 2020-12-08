import React from "react";
import Header from "./Header";
import QuizControl from './QuizControl'
import Confetti from './SmallConfetti'
import Signin from "./Signin";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Navigation from "./Nav";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
      <Header />
        <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <QuizControl />
        </Route>
        <div className="container">
        </div>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
