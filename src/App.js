import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(currentcount => currentcount + 1);
  };
  const dec = () => {
    setCount(currentcount => currentcount - 1);
  };
  return (
    <div>
      count is {count}
      <button onClick={inc}>increment</button>
      <button onClick={dec}>increment</button>
    </div>
  );
}

export default App;
