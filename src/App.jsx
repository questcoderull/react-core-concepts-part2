import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";

function App() {
  function handleClick() {
    alert("I am clicked bro!");
  }

  const handleClick3 = () => {
    alert("I am cliked 3");
  };

  const handleAdd5 = (num) => {
    const newNuber = num + 5;
    alert(newNuber);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("I am secound one clicked!");
        }}
      >
        Click Me 2
      </button>

      <button onClick={handleClick3}>Click Me 3</button>

      {/* doing it by arrow function */}
      <button onClick={() => alert("I am clicked 4")}>Click Me 4</button>

      {/* calling function with perameter. */}
      <button onClick={() => handleAdd5(10)}>Add 5</button>
    </>
  );
}

export default App;
