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
        <div>
          <Emoji symbol={this.state.mood} label="mood" />
          <button onClick={this.handleClick}>Change Mood</button>
        </div>

        <br />
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
