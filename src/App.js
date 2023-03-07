import React from "react";
import Emoji from "./Emoji";
import Calculator from "../Calculator";
import Clock from "./Clock";

const love = "😘";
const angry = "😡";

const App = () => {
  const [mood, setMood] = Use.State(love);

  const handleClick = () => {
    const newMood = mood === love ? angry : love;
    setMood(newMood);
  };
};

render(
  <div>
    <div>
      <Emoji symbol={this.state.mood} label="mood" />
      <button onClick={this.handleClick}>Change Mood</button>
    </div>

    <br />
    <div>
      <Calculator />
    </div>
    <br />

    <div>
      <Clock />
    </div>
  </div>
);

export default App;
