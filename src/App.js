import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  state = {
    input: ''
  };

  createExpression = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: this.state.input + val });
    }
  };

  handleEqual = () => {
    if (isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: math.eval(this.state.input) });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.createExpression}>7</Button>
            <Button handleClick={this.createExpression}>8</Button>
            <Button handleClick={this.createExpression}>9</Button>
            <Button handleClick={this.createExpression}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.createExpression}>4</Button>
            <Button handleClick={this.createExpression}>5</Button>
            <Button handleClick={this.createExpression}>6</Button>
            <Button handleClick={this.createExpression}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.createExpression}>1</Button>
            <Button handleClick={this.createExpression}>2</Button>
            <Button handleClick={this.createExpression}>3</Button>
            <Button handleClick={this.createExpression}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.createExpression}>.</Button>
            <Button handleClick={this.createExpression}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.createExpression}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: '' })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
