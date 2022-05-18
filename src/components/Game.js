import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, id, image, key }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h4>{name}</h4>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.8rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    min-height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
