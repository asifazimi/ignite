import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { smallImage } from "../util";
// Router
import { Link } from "react-router-dom";
// Animations
import { popup } from "../animation";

const Game = ({ name, released, id, image, key }) => {
  const dispatch = useDispatch();
  const stringPathId = id.toString();

  // Load Detail Handler
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h4>{name}</h4>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  /* min-height: 30vh; */
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.8rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    min-height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
