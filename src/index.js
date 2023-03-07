import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null };
    this.greet = this.greet.bind(this);
  }

  greet(name) {
    this.setState({ name: "John" });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name == null ? "World" : this.state.name}</h1>;
        <button onClick={this.greet}>Greet</button>
      </div>
    );
  }
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
