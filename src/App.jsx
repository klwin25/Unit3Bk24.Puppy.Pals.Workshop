import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handlePuppyClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  const featuredPuppy = puppies.find((puppy) => puppy.id === featPupId);
  console.log(setPuppies, handlePuppyClick);

  return (
    <div className="App">
      {/* Render the list of puppy names */}
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
          {puppy.name}
        </p>
      ))}

      {/* Render the featured puppy data below */}
      {featPupId && featuredPuppy && (
        <div className="featured-puppy">
          <hr />
          <h2>Featured Puppy</h2>
          <p>Name: {featuredPuppy.name}</p>
          <p>Email: {featuredPuppy.email}</p>
          <p>Age: {featuredPuppy.age}</p>
          <p>Is Cute: {featuredPuppy.isCute ? "Yes" : "No"}</p>
          <p>Owner ID: {featuredPuppy.ownerId}</p>
          <p>Tricks:</p>
          <ul>
            {featuredPuppy.tricks.length > 0 ? (
              featuredPuppy.tricks.map((trick) => (
                <li key={trick.id}>{trick.title}</li>
              ))
            ) : (
              <li>No tricks available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
