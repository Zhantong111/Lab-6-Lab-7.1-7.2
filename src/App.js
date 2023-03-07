import React from "react";

const love = "😘";
const angry = "😡";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: love };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newMood = this.state.mood === love ? angry : love;
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>{this.state.mood}</h1>
        <button onClick={this.handleClick}>Change Mood</button>
      </div>
    );
  }
}
