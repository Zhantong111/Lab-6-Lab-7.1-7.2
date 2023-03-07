import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0, Num2: 0, result: 0 };
    this.handleChangeNum1 = this.handleChangeNum1.bind(this);
    this.handleChangeNum2 = this.handleChangeNum2.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleChangeNum1(event) {
    event.preventDefault();
    this.setState({ Num1: event.target.value });
  }

  handleChangeNum2(event) {
    event.preventDefault();
    this.setState({ Num2: event.target.value });
  }

  handleCalculate(event) {
    event.preventDefault();
    switch (event.target.operators.value) {
      case "+":
        this.setState({
          result: parseInt(this.state.Num1) + parseInt(this.state.Num2),
        });
        break;
      case "-":
        this.setState({
          result: parseInt(this.state.Num1) - parseInt(this.state.Num2),
        });
        break;
      case "*":
        this.setState({
          result: parseInt(this.state.Num1) * parseInt(this.state.Num2),
        });
        break;
      case "/":
        this.setState({
          result: parseInt(this.state.Num1) / parseInt(this.state.Num2),
        });
        break;
      default:
        break;
    }
  }
}

render();
return (
  <div>
    <h1>Calculator</h1>
    <label>
      Number 1:
      <input
        type="text"
        value={this.state.Num1}
        onChange={this.handleChangeNum1}
      />
    </label>
    <br />
    <label>
      Operator:
      <select name="operators" id="operators">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    </label>
    <br />

    <label>
      Number 2:
      <input
        type="text"
        value={this.state.Num2}
        onChange={this.handleChangeNum2}
      />
    </label>
    <br />
    <button onClick={handleCalcualte}>handleCalcualte</button>
    <br />

    <label>
      Result:
      <input type="text" value={result} readOnly />
    </label>
  </div>
);

export default Calculator;
