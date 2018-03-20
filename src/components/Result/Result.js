import React from 'react';
import './Result.css';



function Result(props) {
  switch (props.quizResult) {
    case 'bold':
      return <div><h1>bold</h1></div>;
    case 'dreamy':
      return <div><h1>dreamy</h1></div>;
    case 'flirty':
      return <div><h1>flirty</h1></div>;
    case 'guilty':
      return <div><h1>guilty</h1></div>;
    case 'jaded':
      return <div><h1>jaded</h1></div>;
  }
}
// function Result(props) {

//   return (
//     <div className="result">
//       You prefer <strong>{props.quizResult}</strong>!
//     </div>
//   );
// }
// Result.propTypes = {
//   quizResult: React.PropTypes.string.isRequired,
// };

export default Result;
