import React, { useState, useEffect } from "react";
import axios from "axios";

const Dogs = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=Random&page=0&limit=10"
      )
      .then((response) => {
        setDogImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
      });
  }, []);

  return (
    <div>
      <h1>Available Dogs</h1>
      <p>View our current list of dogs available for adoption.</p>
      {dogImages.map((dog, index) => (
        <div key={index}>
          <img className="image" src={dog.url} alt="Dog" />
          {dog.breeds && dog.breeds.length > 0 && (
            <>
              <p className="breed-label">Breed:</p>
              <p>Breed: {dog.breeds.map((breed) => breed.name).join(", ")}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dogs;
