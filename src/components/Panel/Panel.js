import React from 'react';
import './Panel.css';

const Panel = (props) => {
  return (
    <div id="panel">
      <button id="clear" type="button" onClick={props.clear}>AC</button>
      <button id="divide" className="operator" type="button" onClick={props.handleOperator}>/</button>
      <button id="multiply" className="operator" type="button" onClick={props.handleOperator}>x</button>
      <button id="subtract" className="operator" type="button" onClick={props.handleOperator}>-</button>
      <button id="add" className="operator" type="button" onClick={props.handleOperator}>+</button>
      <button id="equals" type="button" onClick={props.equal}>=</button>
      <button id="zero" className="number" type="button" onClick={props.handleNumber}>0</button>
      <button id="one" className="number" type="button" onClick={props.handleNumber}>1</button>
      <button id="two" className="number" type="button" onClick={props.handleNumber}>2</button>
      <button id="three" className="number" type="button" onClick={props.handleNumber}>3</button>
      <button id="four" className="number" type="button" onClick={props.handleNumber}>4</button>
      <button id="five" className="number" type="button" onClick={props.handleNumber}>5</button>
      <button id="six" className="number" type="button" onClick={props.handleNumber}>6</button>
      <button id="seven" className="number" type="button" onClick={props.handleNumber}>7</button>
      <button id="eight" className="number" type="button" onClick={props.handleNumber}>8</button>
      <button id="nine" className="number" type="button" onClick={props.handleNumber}>9</button>
      <button id="decimal" type="button" onClick={props.handleNumber}>.</button>
    </div>
  );
}

export default Panel;
