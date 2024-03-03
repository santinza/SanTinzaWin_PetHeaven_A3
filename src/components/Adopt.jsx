import React, { useState } from "react";

const Adopt = () => {
  // List of pets available for adoption
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "BUDDY",
      species: "DOG",
      age: 2,
      breed: "LABRADOR RETRIEVER",
    },
    { id: 2, name: "WHISKERS", species: "CAT", age: 3, breed: "SIAMESE" },
    { id: 3, name: "FLUFFY", species: "CAT", age: 1, breed: "PERSIAN" },
    { id: 4, name: "RUBBY", species: "DOG", age: 1, breed: "BULLDOG" },
    { id: 5, name: "HUGO", species: "DOG", age: 3, breed: "GERMAN SHEPHERD" },
    { id: 6, name: "PONY", species: "CAT", age: 2, breed: "BRITISH SHORTHAIR" },
  ]);
  // State variable to store the pet name entered by the user
  const [adoptedPet, setAdoptedPet] = useState("");
  // State variable to store error message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle pet adoption
  const handleAdopt = () => {
    // Convert the entered pet name to uppercase
    const adoptedPetU = adoptedPet.toUpperCase();
    // Check if the entered pet name exists in the list of available pets (case-insensitive)
    const isPetFound = pets.some(
      (pet) => pet.name.toUpperCase() === adoptedPetU
    );
    if (isPetFound) {
      // Filter out the adopted pet from the list of available pets
      const updatedPets = pets.filter(
        (pet) => pet.name.toUpperCase() !== adoptedPetU
      );
      setPets(updatedPets);
      // Clear the adopted pet name
      setAdoptedPet("");
      // Clear the error message
      setErrorMessage("");
    } else {
      // Set error message if pet not found
      setErrorMessage(`Pet with name '${adoptedPet}' not found in the list.`);
    }
  };

  return (
    <div>
      <h1>Pet Adoption</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdopt();
        }}
      >
        <label>
          Enter the name of the pet you want to adopt:
          <input
            type="text"
            value={adoptedPet}
            onChange={(e) => setAdoptedPet(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Available Pets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Species</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.age}</td>
              <td>{pet.species}</td>
              <td>{pet.breed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Adopt;
