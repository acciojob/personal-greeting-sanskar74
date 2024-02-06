import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inpval, setInpval] = useState("");

  function handleInput(event) {
    setInpval(event.target.value);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input type="text" value={inpval} onChange={handleInput}></input>
      {inpval && <p>Hello {inpval}!</p>}
    </div>
  );
};

export default App;
