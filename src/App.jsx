import { useState } from "react";
import "./App.css";
import Lincoln from "./components/lincoln";
import { puppyList } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  const [bestDog, setBestDog] = useState(null);
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <>
      {/* <Lincoln /> */}
      <h1>Vite + React</h1>
      {bestDog ? <h2>{bestDog} is the best dog!</h2> : <h3>No dog selected</h3>}

      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => setBestDog(puppy.name)}>
          {puppy.name} is a {puppy.age} year old {puppy.breed}
        </p>
      ))}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <Lincoln/> */}
    </>
  );
}

export default App;
