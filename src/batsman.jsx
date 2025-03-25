import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setfours] = useState(0);
  const handleSingle = () => {
    const newRuns = runs + 1;

    setRuns(newRuns);
  };

  const handleFour = () => {
    const newRuns = runs + 4;
    setRuns(newRuns);
    const newFours = fours + 1;
    setfours(newFours);
  };

  const handleSix = () => {
    const newRuns = runs + 6;
    const newSixes = sixes + 1;
    setSixes(newSixes);
    setRuns(newRuns);
  };

  return (
    <div>
      <h3>Player: Bangla batsman</h3>
      <p>
        <small>Sixes -{sixes}</small>
      </p>
      <p>
        <small>Fours -{fours}</small>
      </p>
      {runs > 50 && <p>Wow!! you have reached 50</p>}
      {runs >= 100 && <h3>Wow! you have scored 100</h3>}

      <h1>Score : {runs}</h1>

      <button onClick={handleSingle}>single</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>six</button>
    </div>
  );
}
