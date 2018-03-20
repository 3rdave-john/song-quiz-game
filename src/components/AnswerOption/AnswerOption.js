import React from 'react';
import logo from '../../assets/images/question1-1.png';
// import test from '../../assets/index';
import assets from '../../assets/index';
import './AnswerOption.css';

// Composed of list of items, radio button, and label
// "checked" is a boolean based on the answer selected === answer option type

function AnswerOption(props) {
  return (
    <div className="answerOption">
      {/* <input
        type="button"
        // className="radioCustomButton"
        // name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onClick={props.onAnswerSelected}
      /> */}
      <img
        src={assets[props.answerImage]}
        className="answerOptions__artwork"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onClick={props.onAnswerSelected}
      />
      {/* <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label> */}
    </div>
  );
}

// AnswerOption.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };

export default AnswerOption;
