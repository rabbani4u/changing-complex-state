import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function handleFName(event) {
    const fname = event.target.value;
    setFName(fname);
  }
  function handleLName(event) {
    const lname = event.target.value;
    setLName(lname);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={handleFName}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={handleLName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
