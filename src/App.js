import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0,
      },
      result: '',
    };
  }

  renderQuiz() {
    return <Quiz />;
  }

  renderResult() {
    return <Result />;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quiz Game</h1>
        </header>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
