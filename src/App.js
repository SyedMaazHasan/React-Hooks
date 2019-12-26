import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const incCount = () => {
    setCount(currentcount => currentcount + 1);
  };
  const decCount = () => {
    setCount(currentcount => currentcount - 1);
  };
  const incScore = () => {
    setScore(currentscore => currentscore + 1);
  };

  //mounting phase (once) + updation phase (unlimited times)
  //after every render.... called once in mounting phase + every render in updation phase
  // useEffect(() => {
  //   setCount(currentcount => currentcount + 1);
  // });

  //act as component did mount
  // //only in mounting phase
  // useEffect(() => {
  //   setCount(currentcount => currentcount + 1);
  // }, []);

  //mounting phase (once) + updation phase(only when second argument is changed)
  //only in mounting phase and when second argument is changed then it will run it
  useEffect(() => {
    setCount(currentcount => currentcount + 1);
  }, [score]);

  return (
    <div>
      <h1>count is {count}</h1>
      <h1>score is {score}</h1>
      <button onClick={incCount}>increment counter</button>
      <button onClick={decCount}>decrement counter</button>
      <button onClick={incScore}>
        increment the score first.... and in useEffect, we have a logic which
        will increment count if score is changed... so both score and count will
        be incremented
      </button>
    </div>
  );
}

export default App;
