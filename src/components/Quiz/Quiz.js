import React from "react";
import Question from '../Question/Question';
import QuestionCount from '../QuestionCount/QuestionCount';
import AnswerOption from '../AnswerOption/AnswerOption';
import './Quiz.css';

// Passing props from App.js
// We used App.js as a container component
// All the data is being passed from setState
// 


function Quiz(props) {
  console.log('Quiz props ========>', props)
  function renderAnswerOptions(key) {
    console.log('key inside renderAnswerOptipons', key);
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
     <div className="quiz">
       <QuestionCount
         counter={props.questionId}
         total={props.questionTotal}
       />
       <Question content={props.question} />
       <ul className="answerOptions">
         {props.answerOptions.map(renderAnswerOptions)}
       </ul>
     </div>
  );
}

// Quiz.propTypes = {
//   answer: React.PropTypes.string.isRequired,
//   answerOptions: React.PropTypes.array.isRequired,
//   counter: React.PropTypes.number.isRequired,
//   question: React.PropTypes.string.isRequired,
//   questionId: React.PropTypes.number.isRequired,
//   questionTotal: React.PropTypes.number.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };

export default Quiz;