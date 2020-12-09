import React from "react";
import Header from "./Header";
import QuizControl from './QuizControl'
import Confetti from './SmallConfetti'
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Nav";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  handleSetUser = (user) => {
    this.setState({ user: user })
  }


  render() {

    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/signin">
              {/* <Navigation /> */}
              <Header />
              <div className="container mainBox">
                <Signin
                  user={this.state.user}
                  handleSetUser={this.handleSetUser}
                />
              </div>
            </Route>
            <Route path="/">
              {/* <Navigation /> */}
              {/* <Confetti /> */}
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
}


export default App;