import React, { useState } from "react";

const ReleaseForm = () => {
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [reasonForRelease, setReasonForRelease] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the release data to your backend or perform any other action
    setMessage(
      `Thank you, ${ownerName}! Your pet ${petName} has been released to the society.`
    );
    // Clear the form fields after submission
    setOwnerName("");
    setPetName("");
    setPetSpecies("");
    setPetAge("");
    setPetBreed("");
    setReasonForRelease("");
  };

  return (
    <div>
      <h1>Pet Release Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Owner's Name:
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Pet's Name:
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Pet's Species:
          <input
            type="text"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Pet's Age:
          <input
            type="text"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Pet's Breed:
          <input
            type="text"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Reason for Release:
          <textarea
            value={reasonForRelease}
            onChange={(e) => setReasonForRelease(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Release Pet</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReleaseForm;
