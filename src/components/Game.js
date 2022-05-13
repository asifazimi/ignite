import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, id, image, key }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{released}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Game;
