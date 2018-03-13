import React from "react";
import './Result.css';

function Result(props) {
  return (
    <div className="result">
      You prefer <strong>{props.quizResult}</strong>!
    </div>
  );
}

// Result.propTypes = {
//   quizResult: React.PropTypes.string.isRequired,
// };

export default Result;