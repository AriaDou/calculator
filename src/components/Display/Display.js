import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <div id="display-box">
      <p id="formula">{props.formula}</p>
      <p id="display">{props.output}</p>
    </div>
  );
}

export default Display;
