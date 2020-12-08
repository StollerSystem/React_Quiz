import React from "react";
import Header from "./Header";
import QuizControl from './QuizControl'


function App() {
  return (
    <React.Fragment>
      <div className="container">
      <Header />
      <QuizControl />
      </div>
    </React.Fragment>
  );
}

export default App;
