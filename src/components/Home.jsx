import React from "react";
import logo from "../logo.png";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pet Heaven Society</h1>
      <img src={logo} alt="PetHeaven" />
      <p>Here, we care for abandoned pets and help them find loving homes.</p>
      <p>Explore our website to learn more about us and our available pets.</p>
    </div>
  );
};

export default Home;
