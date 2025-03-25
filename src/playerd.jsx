import { useEffect, useState } from "react";

export default function Players() {
  // they needed to declare a state
  const [players, setPlayers] = useState([]);

  //   they used to use another hook name "useEffect"
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="card">
      <h4>Players : {players.length}</h4>

      {/* then they used to use map as we do now*/}

      <ol>
        {players.map((player) => (
          <li>{player.name}</li>
        ))}
      </ol>
    </div>
  );
}
