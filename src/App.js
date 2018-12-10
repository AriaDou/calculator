import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      formula: '0',
      output: '0'
    };
    this.clear = this.clear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.equal = this.equal.bind(this);
  }

  clear() {
    this.setState({
      formula: '0',
      output: '0'
    });
  }

  handleNumber(event) {
    const newNum = event.target.innerHTML;
    const oldNum = this.state.output;

    if (this.state.formula.includes('=')) { //the last caculate ends, new number covers
      this.setState({
        output: newNum,
        formula: newNum
      })
    } else {
      if (isNaN(parseFloat(oldNum))) { //last input is operator
        this.setState({
          output: newNum,
          formula: this.state.formula.concat(newNum)
        })
      } else if (!(newNum === '.' && oldNum.includes('.'))) { //input is '.', but number already is a float
        if (oldNum === '0' && newNum !== '.') {
          this.setState({
            output: newNum,
            formula: this.state.formula.slice(0, -1) + newNum
          })
        } else {
          this.setState({
            output: this.state.output.concat(newNum),
            formula: this.state.formula.concat(newNum)
          })
        }
      }
    }
  }

  handleOperator(event){
    let newOperator = event.target.innerHTML;
    if (newOperator === 'x') {
      newOperator = '*';
    }
    if (this.state.formula.includes('=')) { //the last caculate ends, the old result is used as new input
      this.setState({
        output: newOperator,
        formula: this.state.output + newOperator
      })
    } else {
      if (isNaN(parseFloat(this.state.output))) { // last input is operator
        this.setState({
          output: newOperator,
          formula: this.state.formula.slice(0, -1) + newOperator
        });
      } else {
        this.setState({
          output: newOperator,
          formula: this.state.formula.concat(newOperator)
        })
      }
    }
  }

  equal() {
    if(this.state.formula.search(/[^0-9.]/) != -1 && !this.state.formula.includes('=')) { //formula is ready, and hasn't been caculate.
      const value = parseFloat(eval(this.state.formula).toFixed(4).toString());
      this.setState({
        output: value,
        formula: this.state.formula.concat('=' + value)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Display formula={this.state.formula} output={this.state.output} />
        <Panel
          clear={this.clear}
          handleNumber={this.handleNumber}
          handleOperator={this.handleOperator}
          equal={this.equal} />
      </div>
    );
  }
}

export default App;
