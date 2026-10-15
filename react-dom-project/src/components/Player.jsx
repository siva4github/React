import { useState } from "react";

export default function Player() {

const [enteredPlayerName, setEnteredPlayerName] = useState("");
const [submitted, setSubmitted] = useState(false);

  function handlePlayerNameChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handlePlayerNameSubmit() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handlePlayerNameChange} value={enteredPlayerName} />
        <button onClick={handlePlayerNameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
