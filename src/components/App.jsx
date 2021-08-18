import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
