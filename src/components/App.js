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
        <Switch>
        <Route path="/signin">
          <Navigation />
          <Header />
          <div className="container mainBox">
            <Signin />            
          </div>
        </Route>
        <Route path="/">
          <Navigation />
          <Header />
          <div className="container mainBox">
            <QuizControl />
          </div>
        </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
