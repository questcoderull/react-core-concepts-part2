import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import user from "./users";
import User from "./users";
import Friends from "./friends";
import Posts from "./posts";
import Players from "./playerd";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();

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
      <Players></Players>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading friends...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading Posts...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}
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
