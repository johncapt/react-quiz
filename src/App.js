import React, { Component } from 'react';
import './App.css';

import quizQuestions from './quizQuestions';
import Question from './Question';
import Results from './Results';

let nbQuestions = quizQuestions.length;
let nbCorrectAnswers = 0;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = (e) => {
    let selected = 'a' + e.target.id;
    let correct = quizQuestions[this.state.counter].c;
    if (selected === correct) { nbCorrectAnswers++; }
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  reStartQuiz = (e) => {
    nbCorrectAnswers = 0;
    this.setState({ counter: 0 });
  };

  render() {
    let compToRender = null;
    if (this.state.counter < nbQuestions) {
      compToRender =
        <Question
          id={this.state.counter}
          q={quizQuestions[this.state.counter].q}
          a0={quizQuestions[this.state.counter].a0}
          a1={quizQuestions[this.state.counter].a1}
          a2={quizQuestions[this.state.counter].a2}
          percent={(this.state.counter * 10) / 2}
          clicked={this.handleClick}
        />
    }
    else {
      compToRender =
        <Results
          clicked={this.reStartQuiz}
          correctAnswers={nbCorrectAnswers}
        />
    }

    return (
      <div className="App">
        <header className="container-header">
          <div className="item-header">
            <div className="App-title">Quiz</div>
          </div>
        </header>
        {compToRender}
      </div>
    );
  }
}

export default App;
