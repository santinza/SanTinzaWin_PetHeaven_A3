import React, { useState, useEffect } from "react";
import axios from "axios";

const Cats = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=Random&page=0&limit=10"
      )
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  }, []);

  return (
    <div>
      <h1>Available Cats</h1>
      <p>View our current list of cats available for adoption.</p>
      {state.map((cat, index) => (
        <div key={index} className="cat-container">
          <img className="image container" src={cat.url} alt="Cat" />
          {cat.breeds && cat.breeds.length > 0 && (
            <>
              <p className="breed-label">Breed:</p>
              <p className="breed-name">Breed: {cat.breeds[0].name}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cats;
