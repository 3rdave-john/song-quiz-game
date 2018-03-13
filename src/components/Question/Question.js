import React from 'react';
import './Question.css';

// Stateless Presentation Component

function Question(props){
    return (
        <h2 className="question">{props.content}</h2>
    )
}

export default Question;