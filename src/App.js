import React, { Component } from 'react';
import headerlogo from './assets/images/samlogo.png';
import footerlogo from './assets/images/s9logo.png';
import './App.css';
import Question from './components/Question/Question';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import quizQuestions from './api/quizQuestions';
import buzzfeedQuestions from './api/buzzfeedQuestions';

// helpers
import update from 'react-addons-update';

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
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const answerOptions = buzzfeedQuestions.map(question => {
      return question.answers;
    });
    console.log('componentWillMount ====> answerOptions', answerOptions[0]);
    this.setState({
      question: buzzfeedQuestions[0].question,
      answerOptions: answerOptions[0],
    });
    console.log('this.state====>', this.state);
  }
  // This was originally inside return, but we took it out for the ternary operator
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={buzzfeedQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }
  // Increment the counter and questiondId
  // Everytime setNextQuestion is called +1 to counter/questionId
  // This will render the next Question
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: buzzfeedQuestions[counter].question,
      answerOptions: buzzfeedQuestions[counter].answers,
      answer: '',
    });
  }
  // This function calculates which answer type (Sony, Microsoft, or Nintendo)
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    // Returns object keys ===> Sony , Microsoft, Nintendo
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    console.log('getResults ---> answersCountValues', answersCountValues);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log('getResults ---> maxAnswerCount', maxAnswerCount);
    // apply accepts an array and it applies the array as parameters to the actual function
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }
  // This function receives the result from getResults which is an array
  // set results checks to see if the array.length == 1
  // Math.max.apply() should be returning the highest number inside a []
  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
  // the value selected from handleAnswerSelected
  // this sets the answer
  setUserAnswer(answer) {
    // This object has the original properties of this.state.answersCount merged with the new answerCount value
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 },
    });
    //  We then update the state by assigning the new object with setState
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer,
    });
  }

  // This is performing to 2 task:
  // 1. setting the answer
  // 2. setting the next question
  handleAnswerSelected(event) {
    console.log('handleAnswersSelected=====>', event);
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < buzzfeedQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headerlogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quiz Game</h1>
        </header>
        {/* <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        /> */}
        {/* <Question content="What is your favourite food?" /> */}
        {/* 
        this.state.result will always be empty
        until the setResults get called
        */}
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <footer className="App-footer">
        <img src={footerlogo} className="App-logo" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;
